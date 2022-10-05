import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
	return (
		<div className=''>
			<Head>
				<title>Fluita</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				{/* sidebar */}
				<Sidebar />
				{/* Feeds */}

				{/* Widgets */}
			</main>
		</div>
	);
};

export default Home;
