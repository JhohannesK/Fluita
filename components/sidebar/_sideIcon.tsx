import React, { SVGProps } from 'react';

interface Props {
	Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
	title: string;
}

const SideIconAndText = ({ Icon, title }: Props) => {
	return (
		<div className='flex w-[8rem] sm:w-[10rem] items-center justify-center md:justify-start space-x-2 p-3 hover:bg-gray-100 cursor-pointer rounded-full transition-all duration-300 group'>
			<Icon className='h-6 w-6 group-hover:text-blue-500' />
			<p className='group-hover:text-mainCol hidden md:inline-flex text-base font-medium lg:text-[16px]'>
				{title}
			</p>
		</div>
	);
};

export default SideIconAndText;
