export default class Routes {

  static INDEX: string          = '/';
  static LOGIN: string          = '/login';
  static SIGNUP: string         = '/signup';
  static RESET_PASSWORD: string = '/reset-pw';
  static APP: string            = '/app';
  static NOTEBOOKS: string      = '/app/notebooks';
  static NOTEBOOK: string       = '/app/notebooks/:notebookId';
  static NOTEBOOK_NOTES: string = '/app/notebooks/:notebookId/notes';
  static NOTEBOOK_NOTE: string  = '/app/notebooks/:notebookId/notes/:noteId';
  static SETTINGS: string       = '/app/settings';

  /** Routes builder */
  static notebookRoute(notebookId: string): string {
    return `/app/notebooks/${notebookId}`;
  }

}