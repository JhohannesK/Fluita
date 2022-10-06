import Image from 'next/image';
import React from 'react';
import SideIconAndText from './_sideIcon';
// HACK: Install @types/heroicons/react
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
		<div className='flex flex-col col-span-2 items-center md:items-start'>
			{/* Logo for Fluita */}
			<BsTwitter size={23} className='text-mainCol m-3' />

			{/* Icon and text for the rows on the sidebar */}
			{/* TODO: Add icons as props when they are installed */}
			<SideIconAndText Icon={HomeIcon} title='Home' />
			<SideIconAndText Icon={HashtagIcon} title='Explore' />
			<SideIconAndText Icon={MagnifyingGlassIcon} title='Search' />
			<SideIconAndText Icon={UserIcon} title='Profile' />
			<SideIconAndText Icon={BellIcon} title='Notification' />
			<SideIconAndText Icon={EnvelopeIcon} title='Messages' />
			<SideIconAndText Icon={CogIcon} title='Settings' />
			<SideIconAndText Icon={EllipsisHorizontalCircleIcon} title='More' />
		</div>
	);
};

export default Sidebar;
