export default class Routes {

  static INDEX: string          = '/';
  static LOGIN: string          = '/login';
  static SIGNUP: string         = '/signup';
  static RESET_PASSWORD: string = '/reset-pw';
  static APP: string            = '/app';
  static NOTEBOOKS: string      = '/app/notebooks';
  static ADD_NOTEBOOK: string   = '/app/notebooks/new';
  static NOTEBOOK: string       = '/app/notebook/:notebookId';
  static NOTEBOOK_NOTE: string  = '/app/notebook/:notebookId/notes/:noteId';
  static SETTINGS: string       = '/app/settings';

  /** Routes builder */
  static notebookRoute(notebookId: string): string {
    return `/app/notebook/${notebookId}`;
  }

}