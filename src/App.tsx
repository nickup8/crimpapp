import { useState } from 'react';
import { ALpha } from './components/alpha/ALpha';
import { Header } from './components/header/Header';
import { SideBar } from './components/sidebar/SideBar';

function App() {
	const [open, setOpen] = useState<boolean>(true);

	const handlerOpen = () => {
		setOpen((prev) => !prev);
	};

	const openClass: string =
		'ml-60 mt-14 overflow-y-visible grow p-6 bg-gray-200';
	const closeClass: string =
		'ml-0 mt-14 overflow-y-visible grow p-6 bg-gray-200';

	return (
		<>
			<Header open={handlerOpen} />
			<div className="content flex h-full flex-1">
				{open && (
					<div className="text-white bg-gray-900 grow basis-60 fixed min-h-screen">
						<SideBar />
					</div>
				)}
				<div className={open ? openClass : closeClass}>
					<ALpha />
				</div>
			</div>
		</>
	);
}

export default App;
