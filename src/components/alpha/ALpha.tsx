import React from 'react';
import { SortPage } from '../sortPage/SortPage';
import { TitlePage } from '../titlePage/TitlePage';

const inputs = [
	{
		typeId: 'text',
		placeholder: 'Код провода',
	},
	{
		typeId: 'text',
		placeholder: 'Код SAP',
	},
	{
		typeId: 'text',
		placeholder: 'Код контакта',
	},
	{
		typeId: 'text',
		placeholder: 'Код Уплотнителя',
	},
	{
		typeId: 'text',
		placeholder: 'Код Уплотнителя',
	},
	{
		typeId: 'text',
		placeholder: 'Код Уплотнителя',
	},
	{
		typeId: 'text',
		placeholder: 'Код Уплотнителя',
	},
];

export const ALpha: React.FC = () => {
	return (
		<div className="alpha">
			<TitlePage title="Alpha" className="mb-4 pl-6" />
			<SortPage inputs={inputs} />
		</div>
	);
};
