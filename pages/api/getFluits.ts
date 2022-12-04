// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../sanity';
import { IFluit } from '../../_types';
import { groq } from 'next-sanity';

const query = groq`
    *[_type == "fluit"] | order(_createdAt desc) {
        _id,
        _createdAt,
        fluitText,
        blockFluit,
        username,
        fluitImage {
            "url": asset->.url
        },
        profileImage {
            "url": asset->.url
        }
    }`;

type Data = {
	fluits: IFluit[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const fluits = await client.fetch(query);
	res.json({ fluits });
}
