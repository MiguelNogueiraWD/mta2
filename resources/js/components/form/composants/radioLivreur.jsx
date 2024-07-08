// import React
import { useState } from 'react';

// import NextUI
import { RadioGroup, Radio } from '@nextui-org/react';

export default function RadioLivreur({finalisation}) {

	const [value, setValue] = useState({
		vehicules: '',
		licence: '',
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setValue({ ...value, [name]: value });
	};

	const options = [
		{ label: 'moto', value: 'moto' },
		{ label: 'scooter', value: 'scooter' },
		{ label: 'vélo', value: 'vélo' },
	];

	return (
		<div className='flex w-screen gap-4 sm:w-full'>
			<div className='flex sm:flex-row w-full justify-between'>
				<RadioGroup
					aria-label="Possedez-vous un véhicule ?"
					label="Possedez-vous un véhicule ?"
					name="vehicules"
					onChange={handleChange}
					value={value.vehicules}
					orientation="horizontal"
					className='mb-2'
				>
					{options.map((option) => (
						<Radio key={option.value} value={option.value} aria-label={option.label}>{option.label}</Radio>
					))}
				</RadioGroup>
			</div>
		</div>
	)
}