import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../sanity';
import { IComment } from '../../_types';
import { groq } from 'next-sanity';

const query = groq`
    *[_type == "comment"] | order(_createdAt desc) {
        _id,
        _createdAt,
        comment, 
        commentDate,
        commentAuthor,
        commentAuthorImage {
            "url": asset->.url
        },
    }
`;

type Data = {
	comments: IComment[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const comments = await client.fetch(query);
	res.json({ comments });
}
