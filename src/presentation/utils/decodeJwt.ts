function decodeJWT(token: string) {
  const parts = token.split('.');
  const encodedPayload = parts[1];
  const decodedPayload = window.atob(encodedPayload);
  const decodedData = JSON.parse(decodedPayload);
  return decodedData;
}

export default decodeJWT;
