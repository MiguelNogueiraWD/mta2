// import React
import { useState } from 'react';

// import NextUI
import { Input } from '@nextui-org/react';

// import constants
import { EyeSlashFilledIcon } from '../../../constants/eyeSlashFilledIcon';
import { EyeFilledIcon } from '../../../constants/eyeFilledIcon';

export default function Password({onChange, value, value1, isInvalidPwd, error}) {

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	return (
		<>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<Input
					isRequired
					name="password"
					label="Password"
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
					onChange={onChange}
					value={value}
					className="mb-4"
					size='sm'
				/>
				<Input
					isRequired
					name="password2"
					label="Password"
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
					type={isVisible ? "text" : "password"}
					errorMessage="Les mots de passe ne correspondent pas."
					isInvalid={isInvalidPwd}
					onChange={onChange}
					value={value1}
					className="mb-4"
					size='sm'
				/>
			</div>
		</>
	);
}