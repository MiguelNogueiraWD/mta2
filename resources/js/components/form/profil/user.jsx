// import react
import { useState, useEffect } from 'react';

import axios from "axios";

// import composant
import Submit from "../composants/submit";
import UserID from "../admin/user/userID";
import Title from './title';
import { DropZone } from '../composants/formFileLicence';


export default function User({ userInfo, onUpdate }) {

	const [isSubmitMaj, setIsSubmitMaj] = useState(false);

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		adresse: '',
		codePostal: '',
		ville: '',
		mail: '',
		telephone: ''
	});

	const [fileValue, setFileValue] = useState({
		'licence': '',
		'identite': '',
		'permis': '',
		'casier': '',
		'photo': ''
	});

	const handleFormChange = (name, value) => {
		setFormData(prevState => ({
			...prevState, [name]: value
		}));
	}

	const handleSubmitMaj = (value) => {
		setIsSubmitMaj(value);
	}

	const updateUser = async () => {
		try {
			const response = await axios.post('api/auth/updateUser', formData);
			if (response.data && response.data.success) {
				console.log("Particulier modifié avec succès");
				onUpdate({
					user: {
						nom: formData.nom || userInfo.user.nom,
						prenom: formData.prenom || userInfo.user.prenom,
						adresse: formData.adresse || userInfo.user.adresse,
						mail: formData.mail || userInfo.user.mail,
						telephone: formData.telephone || userInfo.user.telephone
					},
					ville: {
						codePostal: formData.codePostal || userInfo.ville.codePostal,
						ville: formData.ville || userInfo.ville.nom
					}
				});
				setIsSubmitMaj(false);
			} else {
				console.log('Erreur lors de la mise à jour Particulier : ', error);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	}

	useEffect(() => {
		if (isSubmitMaj) {
			updateUser();
		}
	}, [isSubmitMaj]);

	const handleChange = (event) => {
		const { name, files } = event.target;
		// alert(files[0].name);
		const fileName = files.length > 0 ? files[0].name : '';
		// console.log("Nom du fichier sélectionné : " + files[0].name);
		if (!inputFile(fileName)) {
			alert('Veuillez choisir le format demander : jpg, jpeg, png ou pdf');
		} else {
			console.log(files[0].name)
			setFileValue(
				prevState => (
					{ ...prevState, [name]: fileName })
			);
		}
	};


	return (
		<>
			<Title title='Vos informations profesionnelles' />
			<UserID userInfo={userInfo} onFormChange={handleFormChange} />
			<div className='mt-4'>
				<Title title='Votre photo de profil' />
			</div>
			<DropZone label='glissez/déposez votre photo' onChange={handleChange} />
			<div className="flex justify-center gap-3">
				<Submit onSubmitChange={handleSubmitMaj} submit="mettre à jour" />
				<Submit submit="supprimer compte" />
			</div>
		</>
	);
}