export default {
	name: 'comment',
	title: 'Comment',
	type: 'document',
	fields: [
		{
			name: 'comment',
			title: 'Comment',
			type: 'string',
		},
		{
			name: 'commentDate',
			title: 'Comment Date',
			type: 'datetime',
		},
		{
			name: 'commentAuthor',
			title: 'Comment Author',
			type: 'string',
		},
		{
			name: 'commentAuthorImage',
			title: 'Comment Author Image',
			type: 'image',
		},
		{
			name: 'fluit',
			title: 'Fluit',
			description: 'The fluit to which this comment is associated to.',
			type: 'reference',
			to: [{ type: 'fluit' }],
		},
	],
};
