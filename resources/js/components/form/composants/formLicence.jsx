// import React
import React from 'react';
import { useState, useEffect } from 'react';

// import NextUI
import { Input } from '@nextui-org/react';
import RadioLivreur from './radioLivreur';

export default function FormLicence({ livreurInfo, onFormChange, finalisation }) {

	const [formValue, setFormValue] = useState(
		{
			numLicence: '',
			numIdentite: '',
			numPermis: '',
			siret: '',
		});


	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);
	};

	useEffect(() => {
		if (livreurInfo && livreurInfo.isLivreur) {
			setFormValue({
				numLicence: livreurInfo.livreur.numLicence || '',
				numIdentite: livreurInfo.livreur.numID || '',
				numPermis: livreurInfo.livreur.numPermi || '',
				siret: livreurInfo.livreur.SIRET || ''
			});
		}
	}, [livreurInfo]);

	const classInput = React.useMemo(
		() => ({
			label: ["mb-1"],
			inputWrapper: ['h-14'],
		}),
		[],
	);

	const form = !finalisation ? 'flex-row w-full' : 'flex-col w-3/6';

	return (
		<>
			<div className={`flex ${form} sm:gap-4`}>
				<Input
					isRequired
					name="numLicence"
					label="Licence livreur" id="licence"
					type="text"
					placeholder="votre numéro de licence"
					variant="flat"
					size="sm"
					classNames={classInput}
					onChange={handleChange}
					value={formValue.numLicence}
				/>
				<Input
					isRequired
					name="numIdentite"
					label="Carte d'identité" id="identite"
					type="text"
					placeholder="votre numéro de carte d'identité"
					variant="flat"
					size="sm"
					classNames={classInput}
					onChange={handleChange}
					value={formValue.numIdentite}
				/>
				<Input
					isRequired
					name="numPermis"
					label="Permis de conduire" id="permis"
					type="text"
					placeholder="votre numéro de permis de conduire"
					variant="flat"
					size="sm"
					classNames={classInput}
					onChange={handleChange}
					value={formValue.numPermis}
				/>
				<Input
					isRequired
					name="siret"
					label="Siret" id="siret"
					type="text"
					placeholder="votre numéro siret"
					variant="flat"
					size="sm"
					classNames={classInput}
					onChange={handleChange}
					value={formValue.siret}
				/>
				{finalisation ? <RadioLivreur /> : null}
			</div>
		</>
	);
}