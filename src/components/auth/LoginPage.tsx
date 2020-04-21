import React, {useContext, useState} from 'react';
import logoSvg from '../../assets/img/logo-dark.svg';
import {useForm} from "../../hooks/useForm";
import {AuthContext} from "./AuthWrapper";
import Backend from "../../network/Backend";
import {Link} from "react-router-dom";
import Routes from "../../network/Routes";

export default function LoginPage() {

  const [isSubmitting, set] = useState(false);
  const {onLogin} = useContext(AuthContext);
  const {handleChange, handleSubmit} = useForm(values => {
    set(true);
    const {email, password} = values;
    Backend.getInstance().postLogin(email, password)
      .then(user => {
        onLogin(user.token);
      }).catch(error => {
        console.error("could not login", error);
        set(false);
    });
  });

  return(
    <div className="min-h-screen min-w-full flex justify-center items-center bg-gray-200">
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <img src={logoSvg} alt="Tranquility logo" style={{maxWidth: 150}}/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" name="email" placeholder="Your email goes here" onChange={handleChange} required={true}/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" name="password" placeholder="********" onChange={handleChange} required={true}/>
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="submit" disabled={isSubmitting}>
              Sign In
            </button>
            <div className="flex items-start flex-col">
              <Link to={Routes.RESET_PASSWORD} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Forgot Password?
              </Link>

              <Link to={Routes.SIGNUP} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                New account?
              </Link>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy; 2020 Tranquility notes. All rights reserved.
        </p>
      </div>
    </div>
  )

}