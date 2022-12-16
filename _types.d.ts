export interface IFluit extends fluitBody {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
	_rev: string;
	name: 'fluit';
	blockFluit: boolean;
}

export type fluitBody = {
	fluitText: string;
	username: string;
	fluitDate: string;
	tweetImage: string;
	profileImage?: string;
};

export interface IProps {
	_id: string;
	_createdAt: string;
	fluitText: string;
	blockFluit: boolean;
	username: string;
	fluitImage: {
		url: string;
	};
	profileImage: {
		url: string;
	};
}

export interface Comment {
	comment: string;
	commentDate: string;
	commentAuthor: string;
	commentAuthorImage: {
		url: string;
	};
}

export interface IComment extends Comment {
	_id: string;
	_type: string;
	_createdAt: string;
	fluit: {
		_ref: string;
		_type: 'reference';
	};
}
