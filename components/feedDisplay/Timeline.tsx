import React from 'react';
import Image from 'next/image';
import { IProps } from '../../_types';

const Timeline: React.FC<Record<string, IProps[]>> = ({ timeline }) => {
	return (
		<div className='flex w-full mt-3 bg-red-400'>
			{/* Pfp */}
			<div className='h-full flex items-start justify-start'>
				<div className='h-14 w-14'>
					<Image
						src={timeline[0].profileImage.url}
						width={'100%'}
						height={'100%'}
						alt='profile picture'
						className='object-cover rounded-full'
					/>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Timeline;
