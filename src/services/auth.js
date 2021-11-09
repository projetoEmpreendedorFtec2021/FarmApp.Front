export const TOKEN_KEY = "@farmapp-token";
export const USER_ID = "@farmapp-userid";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export function parseJwt(token) {
  if (!token) { return; }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}
export const signin = token => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_ID,parseJwt(token).IdContaFarmacia);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ID);
};