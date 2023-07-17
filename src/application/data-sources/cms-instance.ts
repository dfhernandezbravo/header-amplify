import axios from 'axios';

const cmsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CMS_URL,
  headers: {
    apikey: process.env.NEXT_PUBLIC_CMS_API_KEY,
  },
});

export default cmsInstance;
