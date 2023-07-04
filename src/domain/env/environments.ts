const env = {
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
};

export const environments = () => {
  let hostURI;
  let hostURL;
  switch (process.env.NEXT_PUBLIC_ENV) {
    case env.DEVELOPMENT:
      hostURL = process.env.NEXT_PUBLIC_HOST_URL_STG;
      break;
    case env.STAGING:
      hostURI = process.env.NEXT_PUBLIC_BFF_MOBILE_URL_STG;
      hostURL = process.env.NEXT_PUBLIC_HOST_URL_STG;
      break;
  }
  return {
    hostURI,
    hostURL,
  };
};
