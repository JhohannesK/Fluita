import nextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter';
import { env } from 'process';

export const authOptions = {
	providers: [
		TwitterProvider({
			clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID ?? '',
			clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET ?? '',
			version: '2.0',
		}),
	],
};

export default nextAuth(authOptions);
