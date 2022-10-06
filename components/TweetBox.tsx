import {
	CalendarDaysIcon,
	ChartBarIcon,
	FaceSmileIcon,
	GifIcon,
	MapPinIcon,
	PhotoIcon,
	UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const TweetBox = () => {
	const [input, setInput] = useState<string>('');

	return (
		<div className='hidden sm:flex space-x-2 mt-3'>
			<div className='h-10 w-10 rounded-full mt-4'>
				<Image
					src='/images/insta.png'
					width={'100%'}
					height={'100%'}
					alt='profile picture'
					className='object-contain'
				/>
			</div>

			<div className='flex flex-1 items-center pl-2'>
				<form action='' className='flex flex-1 flex-col space-y-2'>
					{/* Input text field to type in tweet */}
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						type='text'
						placeholder="What's happening?!"
						className='h-20 placeholder:text-xl outline-none'
					/>
					<div className='flex items-center'>
						{/* Icons */}
						<div className='flex items-center space-x-2 flex-1'>
							<PhotoIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
							<GifIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
							<ChartBarIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
							<FaceSmileIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
							<CalendarDaysIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
							<MapPinIcon className='h-10 rounded-full cursor-pointer hover:scale-150 transition duration-500 ease-linear w-10 text-mainCol hover:bg-gray-100 p-2' />
						</div>
						{/* Tweet button */}
						<button
							disabled={!input}
							type='submit'
							className='bg-mainCol px-5 py-2 font-bold text-white rounded-full disabled:bg-opacity-60'
						>
							Tweet
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TweetBox;
