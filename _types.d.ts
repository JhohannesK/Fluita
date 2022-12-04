export interface IFluit {
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
