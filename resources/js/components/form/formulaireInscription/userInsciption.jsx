// import React
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// import composant
import Submit from "../composants/submit";
import UserID from "../admin/user/userID";


export default function UserI({ userInfo }) {

	const [isSubmit, setIsSubmit] = useState(false);
	const navigate = useNavigate();
	const [formData, setFormData] = useState(
		{
			nom: '',
			prenom: '',
			adresse: '',
			codePostal: '',
			ville: '',
			mail: '',
			telephone: '',
		});

	const handleFormChange = (name, value) => {
		setFormData(prevState => ({ ...prevState, [name]: value }));
	}

	const handleSubmit = () => {
		console.log("soumettre soumis")
		setIsSubmit(true);
	}


	const updateUser = async () => {
		try {
			const response = await axios.post('/api/auth/updateUser', formData);
			if (response.data && response.data.success) {
				console.log("Particulier modifié avec succès");
				setIsSubmit(false);
				navigate('/profilParticulier');
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
			setIsSubmit(false);
		}
	}

	useEffect(() => {
		if (isSubmit) {
			updateUser();
		}
	}, [isSubmit]);

	return (
		<>
			<div className='flex flex-col justify-center w-full sm:w-auto'>
				<div className='m-4 sm:mt-2 sm:mx-4'>
					<h2 className='flex justify-center mb-6 text-2xl sm:text-3xl'>Finalisez votre inscription</h2>
					<div>
						<UserID onFormChange={handleFormChange} userInfo={userInfo} />
						<div className="flex justify-center">
							<Submit onSubmitChange={handleSubmit} submit="SOUMETTRE" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}