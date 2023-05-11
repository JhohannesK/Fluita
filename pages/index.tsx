import axios from 'axios';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Feed from '../components/feedDisplay/Feed';
import Sidebar from '../components/sidebar/Sidebar';
import Widgets from '../components/Widgets';
import { IProps } from '../_types';

const Home: NextPage = ({ res }: Record<string, IProps[]>) => {
	return (
		<div className=' max-h-screen mx-auto xl:max-w-7xl md:pl-5 lg:pr-5 dark:bg-black dark:text-white transition-all duration:500'>
			<Head>
				<title>Fluita</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex'>
				<div className='w-[40%] overscroll-none fixed'>
					<Sidebar />
				</div>

				<div className='flex overflow-y-auto ml-[17rem] '>
					<Feed fluitafeed={res} />

					<Widgets />
				</div>
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
