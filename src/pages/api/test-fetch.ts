import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const response = await axios.post(
      'https://www.easy.cl/_v/segment/graphql/v1/',
      JSON.stringify({
        query: `
         query {
          search(
            query: {
              fullText: "mesa"
            }
          ) {
            items {
              id
              name
              price
              description
            }
          }
        }
      `,
      }),
    );
    // Extraer el dato deseado de la respuesta    const data = response.data.data.search.items;
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
}
