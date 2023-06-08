// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import GetPopularSearchesResponse from '@entities/requests/search/get/get-popular-searches.response';
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<GetPopularSearchesResponse>,
) {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BFF_MOBILE_URL}/products/search/popular`,
    );
    res.json(data);
  } catch (error) {
    console.log(error);
  }
}
