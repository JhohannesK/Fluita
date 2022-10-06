import Image from 'next/image';
import React from 'react';
import SideIconAndText from './_sideIcon';
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	MagnifyingGlassIcon,
	HomeIcon,
	UserIcon,
	CogIcon,
	EnvelopeIcon,
	EllipsisHorizontalCircleIcon,
} from '@heroicons/react/24/outline';
import { BsTwitter } from 'react-icons/bs';

const Sidebar = () => {
	return (
		<div className='absolute w-full px-10 bottom-0 border-t xs:border-0 justify-between xs:relative flex xs:flex-col col-span-2 items-center md:items-start xs:px-5'>
			{/* Logo for Fluita */}
			<div className='hidden xs:inline-flex'>
				<BsTwitter size={23} className='text-mainCol m-3' />
			</div>

			{/* Icon and text for the rows on the sidebar */}
			<SideIconAndText Icon={HomeIcon} title='Home' />
			<div className='hidden xs:inline-flex'>
				<SideIconAndText Icon={HashtagIcon} title='Explore' />
			</div>
			<SideIconAndText Icon={MagnifyingGlassIcon} title='Search' />
			<div className='hidden xs:inline-flex'>
				<SideIconAndText Icon={UserIcon} title='Profile' />
			</div>
			<SideIconAndText Icon={BellIcon} title='Notification' />
			<SideIconAndText Icon={EnvelopeIcon} title='Messages' />
			<div className='hidden xs:inline-flex'>
				<SideIconAndText Icon={CogIcon} title='Settings' />
			</div>
			<div className='hidden xs:inline-flex'>
				<SideIconAndText Icon={EllipsisHorizontalCircleIcon} title='More' />
			</div>

			{/* Tweet button */}
			<button
				type='submit'
				className='hidden xs:inline-flex items-center justify-center p-4 rounded-full text-white bg-mainCol font-bold w-full text-lg tracking-wider'
			>
				Tweet
			</button>
		</div>
	);
};

export default Sidebar;
