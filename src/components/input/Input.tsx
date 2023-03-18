import React from 'react';

interface IInputProps {
	type: string;
	placeholder: string;
}

export const Input: React.FC<IInputProps> = ({ type, placeholder }) => {
	return (
		<input
			className="outline-none basis-1/5 w-full grow px-2 py-1 rounded-sm border border-slate-300 hover:border-slate-500 focus:border-slate-800 hover:transition-all focus:transition-all"
			type={type}
			placeholder={placeholder}
		/>
	);
};
