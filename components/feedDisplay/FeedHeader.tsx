import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';

const FeedHeader = () => {
	return (
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
	);
};

export default FeedHeader;
