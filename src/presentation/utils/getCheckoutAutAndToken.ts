const getCheckoutAuthAndToken = (params: string[]) => {
  let checkoutAndToken = {
    checkoutAuth: '',
    token: '',
  };
  params.forEach((cookie) => {
    const cookieArr = cookie.split('=');
    if (cookieArr[0] === 'checkoutAuthCookieValue') {
      checkoutAndToken.checkoutAuth = cookieArr[1];
    }
    if (cookieArr[0] === 'jwtAuthCookieValue') {
      checkoutAndToken.token = cookieArr[1];
    }
  });

  return checkoutAndToken;
};

export default getCheckoutAuthAndToken;
