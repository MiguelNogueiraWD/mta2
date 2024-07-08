// import react
import { useEffect, useState } from 'react';

// import NextUI
import { Input, Select, SelectItem } from '@nextui-org/react';

// import composant
import { PLANS } from '../../data/selectItem';
import axios from 'axios';

export default function FormBaseRestaurant({ adminRestoInfo, onFormChange }) {

	const [formValue, setFormValue] = useState({
		restaurant: '',
		siret: '',
		adresse: '',
		codePostal: '',
		ville: '',
		formule: '',
	});

	const [typeAbonnements, setTypeAbonnements] = useState([]);

	const handleChange = event => {
		const { name, value } = event.target;
		setFormValue(prevState => ({ ...prevState, [name]: value }));
		onFormChange(name, value);
	};

	const fetctAllTypeAbo = async () => {
		try {
			const response = await axios.get('/api/getTypeAbonnements');
			setTypeAbonnements(response.data);
		} catch (error) {
			console.error("Erreur lors de la récupération des informations du type d'abonnement :", error);
		}
	}

	useEffect(() => {
		if (adminRestoInfo && adminRestoInfo.isAdminResto) {
			fetctAllTypeAbo();
			setFormValue({
				restaurant: adminRestoInfo.professionnel.nom || '',
				siret: adminRestoInfo.professionnel.SIRET || '',
				adresse: adminRestoInfo.professionnel.adresse || '',
				codePostal: adminRestoInfo.ville.codePostal || '',
				ville: adminRestoInfo.ville.nom || '',
				formule: typeAbonnements.idTypeAbo || ''
			});
		}
		console.log('licence : ' + formValue.licence);
	}, [adminRestoInfo]);

	return (
		<>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<Input
					isRequired
					name="restaurant"
					label="Restaurant"
					id="restaurant"
					type="text"
					placeholder="nom du restaurant"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.restaurant}
					className="mb-4" />
				<Input
					isRequired
					name="siret"
					label="Siret"
					id="siret"
					type="number"
					placeholder="votre numéro siret"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.siret}
					className="mb-4" />
			</div>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<Input
					isRequired
					name="adresse"
					label="Adresse"
					id="adresse"
					type="text"
					placeholder="adresse du restaurant"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.adresse}
					className="mb-4" />
				<Input
					isRequired
					name="codePostal"
					label="Code postal"
					id="postal"
					type="number"
					placeholder="Code postal"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.codePostal}
					className="mb-4" />
			</div>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<Input
					isRequired
					name="ville"
					label="Ville"
					id="ville"
					type="text"
					placeholder="Votre ville"
					variant="flat"
					size="sm"
					onChange={handleChange}
					value={formValue.ville}
					className="mb-4" />
				<Select
					label="Votre formule"
					placeholder="Choisir une formule"
					isRequired
					name="formule"
					onChange={handleChange}
					value={formValue.formule}
					size='sm'
				>
					{typeAbonnements.map((typeAbonnement) => (
						<SelectItem key={typeAbonnement.idTypeAbo} value={typeAbonnement.libelle}>
							{typeAbonnement.libelle}
						</SelectItem>
					))}
				</Select>
			</div>
			<div className='flex flex-col sm:flex-row sm:gap-4'>
				<div className='w-6/12'>
					<h4>Début d'abonnement</h4>
					<p>10 janvier 2024</p>
				</div>
				<div lassName='w-6/12'>
					<h4>Fin d'abonnement</h4>
					<p>10 mars 2024</p>
				</div>
			</div>
		</>
	);
}