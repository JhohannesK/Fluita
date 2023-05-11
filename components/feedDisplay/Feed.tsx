import React from 'react';
import TweetBox from './TweetBox';
import { IProps } from '../../_types';
import FeedHeader from './FeedHeader';
import Timeline from './Timeline';
import { useSession } from 'next-auth/react';

const Feed: React.FC<Record<string, IProps[]>> = ({ fluitafeed }) => {
	const { data } = useSession();
	return (
		<div className='w-full lg:w-[70%] h-full border-x px-5'>
			<FeedHeader />
			{data && <TweetBox />}
			{fluitafeed.map((fluita, index) => (
				<Timeline index={index} timeline={fluita} />
			))}
			{fluitafeed.map((fluita, index) => (
				<Timeline index={index} timeline={fluita} />
			))}
		</div>
	);
};

export default Feed;
