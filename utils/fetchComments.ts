import axios from 'axios';
import { IComment } from '../_types';

export const fetchComents = async (commentId: string) => {
	const data = await axios
		.get(
			`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getComments?commentId=${commentId}`
		)
		.then((res) => {
			const comments: IComment[] = res.data;
			return comments;
		})
		.catch((err) => {
			console.log(err);
		});
	console.log('🚀 ~ file: fetchComments.ts:14 ~ fetchComents ~ data', data);
};
