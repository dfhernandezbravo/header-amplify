import axios from 'axios';

const easyBffMobileInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_MOBILE_URL,
});

export default easyBffMobileInstance;
