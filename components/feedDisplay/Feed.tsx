import React from 'react';
import TweetBox from './TweetBox';
import { IProps } from '../../_types';
import FeedHeader from './FeedHeader';
import Timeline from './Timeline';

const Feed: React.FC<Record<string, IProps[]>> = ({ fluitafeed }) => {
	return (
		<div className='col-span-9 xs:col-span-6 lg:col-span-4 overflow-y border-x px-5'>
			<FeedHeader />
			<TweetBox />
			{fluitafeed.map((fluita) => (
				<Timeline timeline={fluita} />
			))}
		</div>
	);
};

export default Feed;
