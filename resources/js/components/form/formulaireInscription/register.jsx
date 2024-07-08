// import react
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// import NextUI
import {
	Modal,
	ModalContent,
	ModalBody,
	ModalFooter,
	Select,
	SelectItem
} from "@nextui-org/react";

// import favicon
import { FaLock } from "react-icons/fa6";

//import axios
import axios from "axios";

// composant
import FormUser from "../composants/formUser";
import Submit from '../composants/submit';
import TermCondition from "../composants/termCondition";
import { USERS } from '../../data/selectItem';


export default function Register({ registerConnected, ...props }) {
	const isOpen = props.isOpen;
	const onOpenChange = props.onOpenChange;
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		mail: '',
		password: '',
		password_confirmation: '',
		conditionUtilisation: 0,
		role: 1
	})
	const [conditionUtilisation, setConditionUtilisation] = useState();
	const [isSubmit, setIsSubmit] = useState(false);
	const [errors, setErrors] = useState({});

	const [value, setValue] = useState(
		{
			profil: '',
		});


	useEffect(() => {
		if (isSubmit) {
			createUser();
		}
	}, [isSubmit]);

	const handleChange = event => {
		const { name, value } = event.target;
		setValue({ ...value, [name]: value });
		console.log(USERS.value);
		setFormData({ ...formData, role: value });
	};

	const handleFormChange = (name, val) => {
		setFormData({ ...formData, [name]: val });
		setErrors({ ...errors, [name]: '' });
	}

	const handleConditionChange = (val) => {
		setConditionUtilisation(val);
		setFormData({ ...formData, conditionUtilisation: val })
	}

	const validateForm = () => {
		let valid = true;
		let newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				newErrors[key] = `Veuillez remplir le champ ${key}.`;
				valid = false;
			}
		});

		if (!formData.conditionUtilisation) {
			newErrors.conditionUtilisation = 'Vous devez accepter les termes et conditions.';
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	const createUser = async () => {
		if (!validateForm()) {
			return; // Ne lance pas la requête si le formulaire n'est pas valide
		}

		try {
			const responseRegister = axios.post('/api/registerUser', formData);
			if (responseRegister) {
				console.log('Données envoyées avec succès');
				const responseConnexion = await axios.post('/api/login', formData);
				if (responseConnexion) {
					onOpenChange(false);
					registerConnected(true);
					if (formData.role == 2) {	
						navigate('/formInscriptionRestaurant')
					} else if (formData.role == 3) {
						navigate('/formInscriptionLivreur');
					} else {
						console.log('Utilisateur enregistré et connecté');
						navigate('/formInscriptionUser');
					}
				}

			}
		} catch (error) {
			if (error.response && error.response.status === 422) {
				// Laravel validation errors
				setErrors(error.response.data.errors);
				setIsSubmit(false)
			} else {
				console.error("Erreur lors de la création de l'utilisateur :", error);
				setIsSubmit(false)
			}
		}
	};


	const handleSubmit = (val) => {
		setIsSubmit(val);
	}



	return (<>
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			radius="none"
			className="bg-orange-500 top-12 sm:top-0">
			<ModalContent>
				{(onClose) => (
					<>
						<ModalBody className="px-8 pt-6">
							{errors.email && <div className="error">{errors.email[0]}</div>}
							<FaLock className="text-orange-300 mx-auto my-4 size-6" />
							<FormUser onFormChange={handleFormChange} errors={errors} />
							<Select
								label="Votre profil"
								placeholder="Choisir une formule"
								isRequired
								name="profil"
								onChange={handleChange}
								value={value.profil}
							>
								{USERS.map((p) => (
									<SelectItem key={p.id} value={p.value}>
										{p.type}
									</SelectItem>
								))}
							</Select>
							<TermCondition onConditionChange={handleConditionChange} />
							{errors.conditionUtilisation && <p>{errors.conditionUtilisation}</p>}
						</ModalBody>
						<ModalFooter className="flex justify-center">
							<Submit onSubmitChange={handleSubmit} submit='INSCRIPTION' />
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	</>);
}