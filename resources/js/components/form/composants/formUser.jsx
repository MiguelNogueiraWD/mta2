// import React
import { useEffect, useState } from 'react';

// import NextUI
import { Input } from '@nextui-org/react';

// import constants
import { EyeSlashFilledIcon } from '../../../constants/eyeSlashFilledIcon';
import { EyeFilledIcon } from '../../../constants/eyeFilledIcon';
import { validateEmail } from '../../../constants/utils';
import { passwordConfirmed } from '../../../constants/utils';


export default function FormUser({ onFormChange, errors }) {

	const [formValue, setFormValue] = useState(
		{
			nom: '',
			prenom: '',
			mail: '',
			tel: '',
			password: '',
			password_confirmation: ''
		});

	const [erreurs, setErreurs] = useState({});
	const [isInvalidMail, setIsInvalidMail] = useState(false);
	const [isInvalidPwd, setIsInvalidPwd] = useState(false);

	// handling change of input + errors fields
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);

		// validation for email and update errors
		if (name === 'mail' && !validateEmail(value)) {
			setErreurs((prevState) => ({ ...prevState, mail: 'Veuillez entrer un email valide.' }));
			setIsInvalidMail(true);
		} else {
			// Clear the error specific to the field being edited
			setErreurs((prevState) => ({ ...prevState, [name]: '' }));
			setIsInvalidMail(false);
		}

		// validation for password confirmation and update errors
		if (name === 'password' || name === 'password_confirmation') {
			validatePasswordConfirmation(name, value);
		}

	};


	const validatePasswordConfirmation = (name, value) => {
		let password = formValue.password;
		let passwordConfirmation = formValue.password_confirmation;

		if (name === 'password') {
			password = value;
		} else if (name === 'password_confirmation') {
			passwordConfirmation = value;
		}

		if (password || passwordConfirmation) {
			if (!passwordConfirmed(password, passwordConfirmation)) {
				setErreurs((prevState) => ({ ...prevState, password_confirmation: 'Les mots de passe ne correspondent pas.' }));
				setIsInvalidPwd(true);
			} else {
				setErreurs((prevState) => ({ ...prevState, password_confirmation: '' }));
				setIsInvalidPwd(false);
			}
		}
	}


	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div className='flex flex-col justify-center sm:w-auto'>
			<div>
				<div>
					<div className='flex flex-col sm:gap-1'>
					{errors.nom && <p>{errors.nom}</p>}
						<Input
							isRequired
							name="nom"
							label="Nom" id="name"
							type="text"
							placeholder="votre nom"
							autoComplete="name"
							variant="flat"
							size="sm"
							onChange={handleChange}
							value={formValue.nom}
							className="mb-4" />
							{errors.prenom && <p>{errors.prenom}</p>}
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
						{errors.mail && <p>{errors.mail}</p>}
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
							isInvalid={isInvalidMail}
							errorMessage={erreurs.mail ? erreurs.mail : ''}
							className="mb-4"
						/>
						{errors.password && <p>{errors.password}</p>}
						<Input
							isRequired
							name="password"
							label="Password" id="password"
							variant="flat"
							placeholder="Créez votre mot de passe"
							endContent={
								<button type="button" onClick={toggleVisibility}>
									{isVisible ? (
										<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
									) : (
										<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
									)}
								</button>
							}
							type={isVisible ? "text" : "password"}
							onChange={handleChange}
							value={formValue.password}
							errorMessage={erreurs.password ? erreurs.password : ''}
							className="mb-4"
						/>
						{errors.password_confirmation && <p>{errors.password_confirmation}</p>}
						<Input
							isRequired
							name="password_confirmation"
							label="Password" id="password"
							variant="flat"
							placeholder="Confirmez votre mot de passe"
							endContent={
								<button type="button" onClick={toggleVisibility}>
									{isVisible ? (
										<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
									) : (
										<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
									)}
								</button>
							}
							isInvalid={isInvalidPwd}
							type={isVisible ? "text" : "password"}
							onChange={handleChange}
							value={formValue.confirmation_password}
							errorMessage={erreurs.password_confirmation ? erreurs.password_confirmation : ''}
							className="mb-4"
						/>					
					</div>
				</div>
			</div>
		</div>
	);
}