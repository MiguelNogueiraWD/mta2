// import react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// composant
import Submit from '../composants/submit';
import FormPro from '../composants/formPro';
import TermCondition from '../composants/termCondition';
import FormBaseRestaurant from '../composants/formBaseRestaurant';

export default function FormRestaurant({ adminRestoInfo }) {

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	const [isSubmit, setIsSubmit] = useState(false);
	const navigate = useNavigate();
	const [formData, setFormData] = useState(
		{
			nom: '',
			prenom: '',
			mail: '',
			telephone: '',
			restaurant: '',
			siret: '',
			adresse: '',
			codePostal: '',
			ville: '',
			formule: '',
		});

	const handleFormChange = (name, value) => {
		setFormData(prevState => ({ ...prevState, [name]: value }));
	}

	const handleSubmit = () => {
		console.log("soumettre soumis")
		console.log("formule : " + formData.formule);
		setIsSubmit(true);
	}

	const updateAdminResto = async()=>{
		try{
			const response = await axios.post('/api/updateAdmin', formData);
			if(response.data && response.data.success){
				console.log("Inscription restaurateur finalisée avec succès");
				setIsSubmit(false);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
			setIsSubmit(false);
		} 
	}

	useEffect(() => {
		if(isSubmit){
			updateAdminResto();
		}
	}, [isSubmit]);

	return (
		<div className='flex flex-col justify-center w-full sm:w-auto'>
			<div className='m-4 sm:mt-2 sm:mx-4'>
				<h2 className='flex justify-center mb-6 text-2xl sm:text-3xl'>Finalisez votre inscription restaurant</h2>
				<div>
					<FormPro adminRestoInfo={adminRestoInfo} onFormChange={handleFormChange} />
					<FormBaseRestaurant adminRestoInfo={adminRestoInfo} onFormChange={handleFormChange} />
					<div className='flex justify-center'>
						<Submit onSubmitChange={handleSubmit} submit="SOUMETTRE" />
					</div>
				</div>
			</div>
		</div>
	);
}