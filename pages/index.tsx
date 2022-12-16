import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/feedDisplay/Feed';
import Sidebar from '../components/sidebar/Sidebar';
import Widgets from '../components/Widgets';
import { IProps } from '../_types';

const Home: NextPage = ({ res }: Record<string, IProps[]>) => {
	return (
		<div className='xl:max-w-7xl mx-auto max-h-screen md:pl-5 lg:pr-5 dark:bg-black dark:text-white transition-all duration:500'>
			<Head>
				<title>Fluita</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='grid grid-cols-9'>
				<Sidebar />

				<Feed fluitafeed={res} />

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
