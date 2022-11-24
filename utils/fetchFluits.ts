import axios from 'axios';
import { IFluit } from '../_types';

export const fetchFluits = async () => {
	const data = await axios
		.get(`${process.env.NEXT_PUBLIC_SANITY_URL}/api/getFluits`)
		.then((res) => {
			const fluits: IFluit[] = res.data;
			return fluits;
		})
		.catch((err) => {
			console.log(err);
		});
};
