import axios from 'axios';

const cmsInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BFF_WEB_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY_BFF_WEB,
  },
});

export default cmsInstance;
