import React from 'react';
interface IButton {
	title: string;
	type?: string;
	className?: string;
}
export const Button: React.FC<IButton> = ({ title, type, className }) => {
	return (
		<button
			type="button"
			className={`px-6 py-2 text-white bg-cyan-700 rounded hover:bg-cyan-600 focus:bg-cyan-900 transition-all ${className}`}
		>
			{title}
		</button>
	);
};
