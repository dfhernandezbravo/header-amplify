const env = {
    DEVELOPMENT: 'DEVELOPMENT',
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION'
}
export const environments  = () => {
    let hostURI;
    switch(process.env.NEXT_PUBLIC_ENV){
        case env.DEVELOPMENT:
        case env.STAGING:
            hostURI =  process.env.NEXT_PUBLIC_BFF_MOBILE_URL_STG;
            break;
    }
    return {
        hostURI
    }
}