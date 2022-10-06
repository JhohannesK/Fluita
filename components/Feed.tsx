import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

const Feed = () => {
	return (
		<div className='col-span-7 lg:col-span-5'>
			<div className='flex items-center justify-between'>
				<p className='text-xl font-bold'>Home</p>
				<ArrowPathIcon className='h-8 w-8 cursor-pointer mr-5 mt-5 text-mainCol transition-all duration-500 ease-out hover:rotate-180 active:scale-125' />
			</div>
		</div>
	);
};

export default Feed;
