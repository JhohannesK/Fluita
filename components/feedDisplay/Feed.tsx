import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import TweetBox from './TweetBox';
import Image from 'next/image';
import { IProps } from '../../_types';
import FeedHeader from './FeedHeader';
import Timeline from './Timeline';

const Feed: React.FC<Record<string, IProps[]>> = ({ fluitafeed }) => {
	return (
		<div className='col-span-9 xs:col-span-7 lg:col-span-5 border-x px-5'>
			<FeedHeader />
			<TweetBox />
			<Timeline timeline={fluitafeed} />
		</div>
	);
};

export default Feed;
