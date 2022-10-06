import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

const Home: NextPage = () => {
	return (
		<div className='lg:max-w-6xl mx-auto max-h-screen overflow-hidden md:pl-5 lg:pr-5'>
			<Head>
				<title>Fluita</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='grid grid-cols-9'>
				{/* sidebar */}
				<Sidebar />

				{/* Feeds */}
				<Feed />

				{/* Widgets */}
				<Widgets />
			</main>
		</div>
	);
};

export default Home;
