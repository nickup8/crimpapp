import { ButtonIcon } from '../ui/ButtonIcon';

interface IHeaderProps {
	open(): void;
}

export const Header: React.FC<IHeaderProps> = ({ open }) => {
	const logo = require('./../../logo.png');
	return (
		<header className="flex h-14 justify-between items-center bg-gray-900 text-white pl-4 pr-6 fixed top-0 w-full z-50">
			<div className="header-logo-box flex items-center">
				<ButtonIcon title="menu" className="mr-3" onClick={open} />
				<a href="/" className="w-36">
					<img src={logo} alt="" />
				</a>
			</div>
			<div className="header-user-profile">1243</div>
		</header>
	);
};
