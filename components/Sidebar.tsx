import Image from 'next/image';
import React from 'react';
import SideIconAndText from './_sideIcon';
// HACK: Install @types/heroicons/react
// import {
// 	BellIcon,
// 	HashtagIcon,
// 	BookmarkIcon,
// 	CollectionIcon,
// 	DotsCircleHorizontalIcon,
// 	MailIcon,
// 	HomeIcon,
// } from '@heroicons/react/outline';

const Sidebar = () => {
	return (
		<div className='flex flex-col'>
			{/* Logo for Fluita */}
			<Image height={20} width={10} src='/images/insta.png' alt='logo' />

			{/* Icon and text for the rows on the sidebar */}
			{/* TODO: Add icons as props when they are installed */}
			<SideIconAndText title='Home' />
			<SideIconAndText title='Explore' />
			<SideIconAndText title='Search' />
			<SideIconAndText title='Profile' />
			<SideIconAndText title='Notification' />
			<SideIconAndText title='Messages' />
			<SideIconAndText title='Settings' />
			<SideIconAndText title='More' />
		</div>
	);
};

export default Sidebar;
