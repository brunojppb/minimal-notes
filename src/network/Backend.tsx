import axios, {AxiosInstance} from 'axios'
import Cookies from "universal-cookie";

export interface User {
  id: number,
  email: string
  firstName: string
  lastName: string
}

export interface UserLogin {
  token: string
  user: User
}

export default class Backend {
  private static instance: Backend
  static AUTH_COOKIE_NAME: string = 'auth-token';

  private _backend: AxiosInstance

  private constructor() {
    this._backend = axios.create({baseURL: process.env.REACT_APP_BACKEND_URL});
    this._backend.interceptors.request.use(config => {
      const token = new Cookies().get(Backend.AUTH_COOKIE_NAME);
      if (token) {
        config.headers.Authorization = token
      }
      return config;
    });
  }

  public static getInstance(): Backend {
    if (!this.instance) {
      this.instance = new Backend();
    }
    return this.instance
  }

  public registerInterceptor(callback: () => void, statusCode: number): () => void {
    const interceptor = this._backend.interceptors.response.use(
      response => response,
      error => {
        const {status} = error.response;
        if (status === statusCode) {
          console.log('unauthorized call intercepted. calling callback...');
          callback();
        }
        return Promise.reject(error);
      });
    return () => this._backend.interceptors.request.eject(interceptor);
  }

  public postLogin(email: string, password: string): Promise<UserLogin> {
    return this._backend
      .post('/api/signin', {email, password})
      .then(response => {
        return response.data as UserLogin;
      });
  }

  public deleteLogout(): Promise<void> {
    return this._backend.delete('/api/logout');
  }

  public getProfile(): Promise<User> {
    return this._backend.get('/api/me').then(response => {
      return response.data as User;
    });
  }

  public postSignUp(email: string,
                    firstName: string,
                    lastName: string,
                    password: string,
                    passwordConfirmation: string): Promise<UserLogin> {
    const data = {
      email, firstName, lastName, password, passwordConfirmation
    };
    return this._backend.post('/api/signup', data).then(response => {
      return response.data as UserLogin;
    });
  }

}