// import react
import { useEffect, useState } from 'react';

import axios from "axios";

// import composant
import FormBaseRestaurant from "../composants/formBaseRestaurant";
import FormPro from "../composants/formPro";
import Submit from "../composants/submit";
import Title from './title';
import { DropZone } from '../composants/formFileLicence';

export default function Restaurant({ adminRestoInfo, onUpdate }) {

	const [isSubmit, setIsSubmit] = useState(false);

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		mail: '',
		telephone: '',
		password: '',
		restaurant: '',
		siret: '',
		adresse: '',
		codePostal: '',
		ville: '',
		formule: ''

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
		console.log('licence : ' + formData.licence);
	}

	const handleSubmit = (value) => {
		setIsSubmit(value);
	}

	const updateAdmin = async () => {
		try {
			const response = await axios.post('/api/updateAdmin', formData);

			if (response.data && response.data.success) {
				console.log("Administrateur modifié avec succès");
				onUpdate({
					user: {
						nom: formData.nom || adminRestoInfo.user.nom,
						prenom: formData.prenom || adminRestoInfo.user.prenom,
						mail: formData.mail || adminRestoInfo.user.mail,
						telephone: formData.telephone || adminRestoInfo.user.telephone,
						password: formData.password || ''
					},
					professionnel: {
						restaurant: formData.restaurant || adminRestoInfo.professionnel.nom,
						adresse: formData.adresse || adminRestoInfo.professionnel.adresse,
						siret: formData.siret || adminRestoInfo.professionnel.siret
					},
					ville: {
						codePostal: formData.codePostal || adminRestoInfo.ville.codePostal,
						ville: formData.ville || adminRestoInfo.ville.nom
					}
				});
				setIsSubmit(false);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	}

	useEffect(() => {
		if (isSubmit) {
			updateAdmin();
		}
	}, [isSubmit]);

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
			<FormPro adminRestoInfo={adminRestoInfo} onFormChange={handleFormChange} />
			<Title title='Vos informations profesionnelles' />
			<FormBaseRestaurant adminRestoInfo={adminRestoInfo} onFormChange={handleFormChange} />
			<div className='mt-4'>
				<Title title='Votre photo de profil' />
			</div>
			<DropZone label='glissez/déposez votre photo' onChange={handleChange} />
			<div className="flex justify-center gap-3">
				<Submit onSubmitChange={handleSubmit} submit="mettre à jour" />
				<Submit submit="supprimer compte" />
			</div>
		</>
	);
}