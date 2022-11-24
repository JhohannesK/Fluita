import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';
import Image from 'next/image';
import { IProps } from '../_types';

const Feed: React.FC<Record<string, IProps[]>> = ({ fluitaFeed }) => {
	return (
		<div className='col-span-9 xs:col-span-7 lg:col-span-5 border-x px-5'>
			<div className='flex items-center justify-between mt-5'>
				<div className='flex items-center space-x-4'>
					<div className='h-10 w-10 sm:hidden inline-block rounded-full'>
						<Image
							src='/images/insta.png'
							width={'100%'}
							height={'100%'}
							alt='profile picture'
							className='object-contain'
						/>
					</div>

					<p className='text-xl font-bold'>Home</p>
				</div>
				<ArrowPathIcon className='h-8 w-8 cursor-pointer mr-5 text-mainCol transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
			</div>

			<TweetBox />
		</div>
	);
};

export default Feed;
