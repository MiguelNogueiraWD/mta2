// import React
import { useState, useEffect } from 'react';

// import NextUI
import { Input } from '@nextui-org/react';

// import constants
import Password from './password';
import { passwordConfirmed } from '../../../constants/utils';

export default function FormPro({ adminRestoInfo, livreurInfo, onFormChange, finalisation }) {

	const [isInvalidPwd, setIsInvalidPwd] = useState(false);
	const [errors, setErrors] = useState({});
	const [formValue, setFormValue] = useState(
		{
			nom: '',
			prenom: '',
			mail: '',
			telephone: '',
			password: '',
			password2: '',
		});


	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);

		if (name === 'password' || name === 'password2') {
			validatePasswordConfirmation(name, value);
		}
	};

	const validatePasswordConfirmation = (name, value) => {
		let password = formValue.password;
		let password2 = formValue.password2;

		if (name === 'password') {
			password = value;
		} else if (name === 'password2') {
			password2 = value;
		}

		if (password || password2) {
			if (!passwordConfirmed(password, password2)) {
				setErrors((prevState) => ({ ...prevState, password2: 'Les mots de passe ne correspondent pas.' }));
				setIsInvalidPwd(true);
			} else {
				setErrors((prevState) => ({ ...prevState, password2: '' }));
				setIsInvalidPwd(false);
			}
		}
	}

	useEffect(() => {
		if (adminRestoInfo && adminRestoInfo.isAdminResto) {
			setFormValue({
				nom: adminRestoInfo.user.nom || '',
				prenom: adminRestoInfo.user.prenom || '',
				mail: adminRestoInfo.user.mail || '',
				telephone: adminRestoInfo.user.telephone || '',
				password: '',
				password2: ''
			});
		} else if (livreurInfo && livreurInfo.isLivreur) {
			setFormValue({
				nom: livreurInfo.user.nom || '',
				prenom: livreurInfo.user.prenom || '',
				mail: livreurInfo.user.mail || '',
				telephone: livreurInfo.user.telephone || '',
				password: '',
				password2: ''
			});
		}
	}, [adminRestoInfo, livreurInfo]);


	return (
		<>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<Input
					isRequired
					name="nom"
					label="Nom" id="nom"
					type="text"
					placeholder="votre nom"
					autoComplete="name"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.nom}
					className="mb-4" />
				<Input
					isRequired
					name="prenom"
					label="Prénom" id="prenom"
					type="text"
					placeholder="votre prénom"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.prenom}
					className="mb-4" />
			</div>
			<div className='flex flex-col sm:flex-row sm:gap-4 sm:mb-2'>
				<Input
					isRequired
					name="mail"
					label="Mail" id="mail"
					type="email"
					placeholder="votre email"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.mail}
					isInvalid={false}
					errorMessage="Please enter a valid email"

				/>
				<Input
					isRequired
					name="telephone"
					label="Téléphone" id="tel"
					type="number"
					placeholder="votre numéro de téléphone"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.telephone}
				/>
			</div>
			{!finalisation ? <Password
				onChange={handleChange}
				value={formValue.password}
				value1={formValue.password2}
				error={errors}
				isInvalidPwd={isInvalidPwd} /> : null}
		</>
	);
}