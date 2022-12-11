import React from 'react';
import Image from 'next/image';
import { IProps } from '../../_types';
import ReactTimeago from 'react-timeago';

const Timeline: React.FC<Record<string, IProps[]>> = ({ timeline }) => {
	return (
		<div className='flex w-full mt-3 space-x-5'>
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
			<div className='w-full'>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center text-[15px] space-x-1'>
						<p className='font-bold'>{timeline[0].username}</p>
						<p className='font-light text-gray-600'>
							@{timeline[0].username.replace('', '_')}
						</p>
						<span>·</span>
						<ReactTimeago
							className='font-light text-gray-600'
							date={timeline[0]._createdAt}
							formatter={(value, unit) => {
								if (unit === 'second') {
									return 'Just now';
								} else if (unit === 'minute') {
									return value + 'm';
								} else if (unit === 'hour') {
									return value + 'h';
								} else if (unit === 'day') {
									return value + 'd';
								} else if (unit === 'week') {
									return value + 'w';
								} else if (unit === 'month') {
									return value + 'm';
								} else if (unit === 'year') {
									return value + 'y';
								}
							}}
						/>
					</div>
					<div>
						<p className='tracking-widest font-bold cursor-pointer'>
							...
						</p>
					</div>
				</div>
				<div>{timeline[0].fluitText}</div>
				<div className='mt-1'>
					{timeline[0].fluitImage && (
						<div className=' w-full'>
							<img
								src={timeline[0].fluitImage.url}
								className='w-full h-full rounded-3xl object-cover'
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
