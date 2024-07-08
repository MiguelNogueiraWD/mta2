// import react
import { useState, useEffect } from 'react';

import axios from "axios";

// import composant
import FormLicence from "../composants/formLicence";
import FormPro from "../composants/formPro";
import Submit from "../composants/submit";
import RadioLivreur from '../composants/radioLivreur';
import Title from './title';
import { DropZone } from '../composants/formFileLicence';

export default function Livreur({ livreurInfo, onUpdate, finalisation }) {

	const [isSubmitMaj, setIsSubmitMaj] = useState(false);

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		mail: '',
		telephone: '',
		password: '',
		numLicence: '',
		numIdentite: '',
		numPermis: '',
		siret: ''
	})

	const [fileValue, setFileValue] = useState({
		'licence': '',
		'identite': '',
		'permis': '',
		'casier': '',
		'photo': ''
	});

	const handleFormChange = (name, value) => {
		setFormData(prevState => ({ ...prevState, [name]: value }));
	}

	const handleSubmitMaj = (value) => {
		setIsSubmitMaj(value);
	}

	const updateLivreur = async () => {
		try {
			const response = await axios.post('/api/updateLivreur', formData);

			if (response.data && response.data.success) {
				console.log('Livreur modifié avec succès');
				onUpdate({
					user: {
						nom: formData.nom || livreurInfo.user.nom,
						prenom: formData.prenom || livreurInfo.user.prenom,
						mail: formData.mail || livreurInfo.user.mail,
						telephone: formData.telephone || livreurInfo.user.telephone,
						password: formData.password || ''
					},
					livreur: {
						numLicence: formData.numLicence || livreurInfo.livreur.numLicence,
						numIdentite: formData.numIdentite || livreurInfo.livreur.numIdentite,
						numPermis: formData.numPermis || livreurInfo.livreur.numPermis,
						SIRET: formData.siret || livreurInfo.livreur.SIRET
					}
				});
				setIsSubmitMaj(false);
			} else {
				console.error('Erreur lors de la mise à jour');
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	}

	useEffect(() => {
		if (isSubmitMaj) {
			updateLivreur();
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
			<Title title='Votre identité' />
			<FormPro livreurInfo={livreurInfo} onFormChange={handleFormChange} finalisation={finalisation} />
			<Title title='Vos informations profesionnelles' />
			<div className='flex flex-row flex-auto gap-4'>
				<FormLicence livreurInfo={livreurInfo} onFormChange={handleFormChange} />
			</div>
			<div className='mt-4'>
				<RadioLivreur />
			</div>
			<div className='mt-2'>
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