import React, { SVGProps } from 'react';

interface Props {
	// TODO: Remove optional props when icons are made available.
	Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

const SideIconAndText = ({ Icon, title }: Props) => {
	return (
		<div className='flex max-w-[10rem] items-center space-x-2 px-2 py-4 hover:bg-gray-100 cursor-pointer rounded-full transition-all duration-300 group'>
			<p className='group-hover:text-mainCol'>{title}</p>
		</div>
	);
};

export default SideIconAndText;
