import { ArrowPathIcon, MoonIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React from 'react';
import { ThemeContext } from '../../ThemeContext';
import { useSession } from 'next-auth/react';

const FeedHeader = () => {
	const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
	const { data } = useSession();
	return (
		<div className='flex items-center justify-between mt-5'>
			<div className='flex items-center space-x-4'>
				<div className='h-10 w-10 sm:hidden inline-block'>
					<Image
						src={data?.user?.image || '/images/insta.png'}
						width={'100%'}
						height={'100%'}
						alt='profile picture'
						className='object-contain rounded-full'
					/>
				</div>

				<p className='text-xl font-bold'>Home</p>
			</div>
			<MoonIcon
				onClick={() =>
					changeCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
				}
				className='h-8 w-8 cursor-pointer mr-5 text-mainCol transition-all duration-500 ease-out hover:rotate-180 active:scale-125'
			/>
		</div>
	);
};

export default FeedHeader;
