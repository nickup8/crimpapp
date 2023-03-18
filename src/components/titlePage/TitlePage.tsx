import React from 'react';
interface ITitle {
	title: string;
	className?: string;
}
export const TitlePage: React.FC<ITitle> = ({ title, className }) => {
	return (
		<div className={className}>
			<h1 className="text-3xl">{title}</h1>
		</div>
	);
};
