import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Widgets = () => {
	return (
		<div className='px-2 mt-2 lg:inline col-span-2 hidden'>
			<div className='flex space-x-2 items-center bg-gray-100 p-3 rounded-full mt-2'>
				<MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
				<input
					type='text'
					placeholder='Search Fluita'
					className='bg-transparent flex-1 outline-none'
				/>
			</div>
			<TwitterTimelineEmbed
				sourceType='profile'
				screenName='_jhohannes'
				options={{ height: 400 }}
			/>
		</div>
	);
};

export default Widgets;
