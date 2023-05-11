import React from 'react';
import Image from 'next/image';
import { IProps } from '../../_types';
import ReactTimeago from 'react-timeago';
import { ChatBubbleOvalLeftIcon, HeartIcon } from '@heroicons/react/24/outline';
import { AiOutlineRetweet } from 'react-icons/ai';
import { FiShare } from 'react-icons/fi';
import { TbCircleTriangle } from 'react-icons/tb';

const Timeline: React.FC<{ timeline: IProps; index: number }> = ({
	timeline,
	index,
}) => {
	return (
		<div className='flex w-full mt-3 space-x-5' key={index}>
			{/* Pfp */}
			<div className='h-full flex items-start justify-start'>
				<div className='h-14 w-14 rounded-full bg-red-600'>
					<Image
						src={timeline.profileImage.url}
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
						<p className='font-bold'>{timeline.username}</p>
						<p className='font-light text-gray-600'>
							@{timeline.username.replace('', '_')}
						</p>
						<span>·</span>
						<ReactTimeago
							className='font-light text-gray-600'
							date={timeline._createdAt}
							formatter={(value, unit) => {
								if (unit === 'second') {
									return value + 's';
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
				<div>{timeline.fluitText}</div>
				<div className='mt-1'>
					{timeline.fluitImage && (
						<div className=' w-full'>
							<img
								src={timeline.fluitImage.url}
								className='w-full h-full rounded-3xl object-cover'
							/>
						</div>
					)}
				</div>
				<div className='flex items-center justify-between pt-2'>
					<div className='tweetIcons group'>
						<ChatBubbleOvalLeftIcon className='icon group-hover:text-blue-500' />
						<p className='tweetText group-hover:text-blue-500'>34</p>
					</div>
					<div className='tweetIcons group '>
						<AiOutlineRetweet className='icon group-hover:text-green-500' />
						<p className='tweetText group-hover:text-green-500'>402</p>
					</div>
					<div className='tweetIcons group'>
						<HeartIcon className='icon group-hover:text-red-500' />
						<p className='tweetText group-hover:text-red-500'>1.2k</p>
					</div>
					<div className='tweetIcons'>
						<FiShare className='icon' />
					</div>
					<div className='hidden tweetIcons xs:inline-flex'>
						<TbCircleTriangle className='icon' />
						<p>Tip</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Timeline;
