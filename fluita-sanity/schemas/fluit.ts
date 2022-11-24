export default {
	name: 'fluit',
	title: 'Fluit',
	type: 'document',
	fields: [
		{
			name: 'fluitText',
			title: 'Fluit Text',
			type: 'string',
			description: 'The text of the tweet.',
		},
		{
			name: 'blockFluit',
			title: 'Block Fluit',
			type: 'boolean',
			description: 'Block the tweet from being displayed on the site.',
		},
		{
			name: 'username',
			title: 'Username',
			type: 'string',
			description: 'The username of the fluit author.',
		},

		{
			name: 'fluitDate',
			title: 'Fluit Date',
			type: 'datetime',
			description: 'The date the tweet was created.',
		},
		{
			name: 'fluitImage',
			title: 'Fluit Image',
			type: 'image',
			description: 'The image of the fluit.',
		},
		{
			name: 'profileImage',
			title: 'Profile Image',
			type: 'image',
			description: 'The profile image of the fluit author.',
		},
	],
};
