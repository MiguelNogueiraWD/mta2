// import React
import { useState } from 'react';

// import NextUI
import { Input } from '@nextui-org/react';

// iumport constants
import { EyeSlashFilledIcon } from '../../../constants/eyeSlashFilledIcon';
import { EyeFilledIcon } from '../../../constants/eyeFilledIcon';
import { validateEmail } from '../../../constants/utils';

export default function FormLogin({ onFormChange, errors }) {

	const [formValue, setFormValue] = useState(
		{
			mail: '',
			password: '',
		});

	const [erreurs, setErreurs] = useState({});
	const [isInvalid, setIsInvalid] = useState(false);

	const handleChange = event => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);
		if (name === 'mail' && !validateEmail(value)) {
			setErreurs((prevState) => ({ ...prevState, mail: 'Veuillez entrer un email valide.' }));
			setIsInvalid(true);
		} else {
			// Efface l'erreur spécifique au champ en cours de modification
			setErreurs((prevState) => ({ ...prevState, [name]: '' }));
			setIsInvalid(false);
		}
		if (value === '') {
			setErreurs((prevState) => ({ ...prevState, [name]: 'Veuillez remplir le champs ' + name }));
			setIsInvalid(false);
		}
	};
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<div className='flex flex-col justify-center w-full sm:w-auto'>
			<div>
				<div>
					<div className='flex flex-col sm:gap-1'>
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
							isInvalid={isInvalid}
							errorMessage={erreurs.mail ? erreurs.mail : ''}
							className="mb-4"
						/>
						{errors.password && <p>{errors.password}</p>}						
						<Input
							isRequired
							name="password"
							label="Password"
							variant="flat"
							placeholder="Entrez votre mot de passe"
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
							className="mb-4"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}