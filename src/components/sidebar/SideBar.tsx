import React from 'react';

const menuItems: string[] = ['Manual', '477', 'ПВАМДЕ'];

export const SideBar = () => {
	return (
		<nav className="w-60 max-h-screen relative overflow-y-auto mt-14 px-6">
			<ul className="list-none mt-6">
				{menuItems.map((menuItem, index) => {
					return (
						<li className="mb-2 last:mb-0" key={index + '_' + menuItem}>
							{menuItem}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
