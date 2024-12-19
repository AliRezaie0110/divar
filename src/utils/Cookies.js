const setCookies = (token) => {
  //   console.log(token);

  document.cookie = `accessToken =${token.accessToken}; max-age=${1 * 24 * 60 * 60
    }`;
  document.cookie = `refreshToken =${token.refreshToken}; max-age=${60 * 24 * 60 * 60
    }`;
};

const getCookie = (cookieName) => {
  return document.cookie.split(";").find(token => token.trim().split("=")[0] === cookieName)?.split("=")[1];
  // return document.cookie.split(";").find(token => token.trim().split("=")[0] === cookieName)
}

export { setCookies, getCookie };
