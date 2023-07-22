export const axios = require('axios').default;

export function logout() {
    localStorage.removeItem("isAuth");
    window.location.replace("https://api.typovillain.com/oauth2/logout");
}
