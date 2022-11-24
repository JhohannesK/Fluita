import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { fetchFluits } from '../utils/fetchFluits';
import { IProps } from '../_types';

const Home: NextPage = ({ res }: Record<string, IProps[]>) => {
	return (
		<div className='xl:max-w-7xl mx-auto max-h-screen overflow-hidden md:pl-5 lg:pr-5'>
			<Head>
				<title>Fluita</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='grid grid-cols-9'>
				{/* sidebar */}
				<Sidebar />

				{/* Feeds */}
				<Feed fluitafeed={res} />

				{/* Widgets */}
				<Widgets />
			</main>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch('http://localhost:3000/api/getFluits').then((res) =>
		res.json()
	);

	return {
		props: {
			res: res.fluits,
		},
	};
};
