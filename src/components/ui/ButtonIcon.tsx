import React from 'react';

interface IButtonIconProps {
	title: string;
	className?: string;
	onClick(): void;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({
	title,
	className,
	onClick,
}) => {
	return (
		<button className={`button button-inverse ${className}`} onClick={onClick}>
			<span className="material-icons-outlined">{title}</span>
		</button>
	);
};
