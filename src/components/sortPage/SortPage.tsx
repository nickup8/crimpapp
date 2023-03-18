import React from 'react';
import { Input } from '../input/Input';
import { Button } from '../ui/Button';
interface ISortPageProp {
	inputs: any;
}

export const SortPage: React.FC<ISortPageProp> = ({ inputs }) => {
	return (
		<div className="sortingPage pt-4 px-6 pb-6 bg-white rounded w-full">
			<h2 className="text-xl">Поиск</h2>
			<form className="mt-3">
				<div className="inputContainer flex justify-between flex-wrap gap-2">
					{inputs.map((item: any, index: any) => {
						return (
							<Input
								type={item.typeId}
								placeholder={item.placeholder}
								key={`${index}_${item.typeId}_${item.placeholder}`}
							/>
						);
					})}
				</div>
				<Button title="Искать" type="submit" className="mt-5" />
			</form>
		</div>
	);
};
