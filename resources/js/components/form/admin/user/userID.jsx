// import React
import { useEffect, useState } from "react";
import axios from "axios";

// import NextUI
import { Input } from '@nextui-org/react';

export default function UserID({ userInfo, onFormChange }) {

	const [formValue, setFormValue] = useState(
		{
			nom: '',
			prenom: '',
			adresse: '',
			codePostal: '',
			ville: '',
			mail: '',
			telephone: ''
			
		});
		const [isInvalid, setIsInvalid]=useState(false);

	const handleChange = event => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);
	};

	useEffect(() => {
		if(userInfo.isUser){
			setFormValue({
				nom: userInfo.user.nom || '',
				prenom: userInfo.user.prenom || '',
				adresse: userInfo.user.adresse || '',
				codePostal: userInfo.ville.codePostal || '',
				ville: userInfo.ville.nom || '',
				mail: userInfo.user.mail || '',
				telephone: userInfo.user.telephone || ''
			});
		}
	}, [userInfo]);

	return (
		<div className='flex flex-col justify-center w-full sm:w-auto'>
			<div className='flex flex-col sm:gap-1'>	
				<div className='flex flex-row gap-4'>
					<Input
						name="nom"
						label="Nom" id="name"
						type="text"
						placeholder="votre nom"
						autoComplete="name"
						variant="flat"
						size="sm"
						onChange={handleChange}
						isInvalid={isInvalid}
						value={formValue.nom}
						className="mb-4" />
					<Input
						name="prenom"
						label="Prénom" id="prenom"
						type="text"
						placeholder="votre prénom"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}
						onChange={handleChange}
						value={formValue.prenom}
						className="mb-4" />
				</div>
				<div>
					<Input
						name="adresse"
						label="Adresse" id="adresse"
						type="text"
						placeholder="votre adresse"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}
						onChange={handleChange}
						value={formValue.adresse}
						className="mb-4"
					/>
				</div>
				<div className='flex flex-row gap-4'>	
					<Input
						name="codePostal"
						label="Code postal" id="codePostal"
						type="number"
						placeholder="Code postal"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}				
						onChange={handleChange}
						value={formValue.codePostal}
						className="mb-4"
					/>
					<Input
						name="ville"
						label="Ville" id="ville"
						type="text"
						placeholder="Ville"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}
						onChange={handleChange}
						value={formValue.ville}
						className="mb-4"
					/>
				</div>
				<div className='flex flex-row gap-4'>	
					<Input
						name="mail"
						label="Mail" id="mail"
						type="email"
						placeholder="Votre email"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}
						onChange={handleChange}
						value={formValue.mail}
						className="mb-2"
					/>
					<Input
						name="telephone"
						label="Téléphone" id="telephone"
						type="number"
						placeholder="Votre téléphone"
						variant="flat"
						size="sm"
						isInvalid={isInvalid}
						onChange={handleChange}
						value={formValue.telephone}
						className="mb-2" />
				</div>
			</div>
		</div>
	);
}