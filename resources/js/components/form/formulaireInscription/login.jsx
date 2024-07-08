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
import FormLogin from '../composants/formLogin';
import Submit from '../composants/submit';
import { USERS } from '../../data/selectItem';


export default function Login({ onLoginChange, ...props }) {
	const isOpen = props.isOpen;
	const onOpenChange = props.onOpenChange;
	const type = props.type;

	const [formData, setFormData] = useState({
		mail: '',
		password: ''
	});
	const [isSubmit, setIsSubmit] = useState(false);
	const [errors, setErrors] = useState({});
	const [isAdminResto, setIsAdminResto] = useState(false);
	const [isProfessionnel, setIsProfessionnel] = useState(null);
	const [isLivreur, setIsLivreur] = useState(false)

	useEffect(() => {
		if (isSubmit) {
			doLogin();
		}
	}, [isSubmit]);


	const handleFormChange = (name, value) => {
		setFormData({ ...formData, [name]: value });
	}

	const handleSubmit = (value) => {
		setIsSubmit(value);
		console.log(formData);
	}

	const navigate = useNavigate();

	//validaton du formulaire et gestion des erreurs
	const validateForm = () => {
		let valid = true;
		let newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				newErrors[key] = `Veuillez remplir le champ ${key}.`;
				valid = false;
			}
		});

		setErrors(newErrors);
		return valid;
	};

	const checkAdminResto = async () => {
		try {
			const response = await axios.get('/api/getAdminInfo');
			if (response.data && response.data.isAdminResto) {
				console.log("est admin : " + response.data.isAdminResto);
				setIsAdminResto(true);
				setIsProfessionnel(response.data.professionnel);
				return { isAdminResto: true };
			} else {
				setIsAdminResto(false);
				return { isAdminResto: false };
			}
		} catch (error) {
			console.error("Erreur lors de la vérification de l'admin :", error);
			setIsAdminResto(false);
			setIsSubmit(false);
			return { isAdminResto: false };
		}
	};

	const checkLivreur = async () => {
		try {
			const response = await axios.get('/api/getLivreurInfo');
			if (response.data && response.data.isLivreur) {
				console.log("est livreur : " + response.data.isLivreur);
				setIsLivreur(true);
				return { isLivreur: true };
			} else {
				setIsLivreur(false);
				return { isLivreur: false };
			}
		} catch (error) {
			console.error("Erreur lors de la vérification du livreur :", error);
			setIsLivreur(false);
			setIsSubmit(false);
			return { isLivreur: false };
		}
	};

	const doLogin = async () => {
		if (!validateForm()) {
			return; // Ne lance pas la requête si le formulaire n'est pas valide
		}
		try {
			const response = await axios.post('/api/login', formData);

			if (response.status === 200) {
				onOpenChange(false); // Ferme la fenêtre modale après une connexion réussie
				onLoginChange(true);

				const adminRestoCheck = await checkAdminResto();
				const livreurCheck = await checkLivreur();

				console.log('isAdminResto state : ' + adminRestoCheck.isAdminResto);
				console.log('isLivreur state : ' + livreurCheck.isLivreur);

				if (adminRestoCheck.isAdminResto) {
					navigate('/profilRestaurant');
				} else if (livreurCheck.isLivreur) {
					navigate('/profilLivreur');
				} else {
					navigate('/geoRestaurant');
				}
				console.log('Utilisateur connecté');
			} else {
				console.error('Erreur lors de la connexion :', response.data.error);
				setIsSubmit(false);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
			setIsSubmit(false);
		}
	};

	return (<>
		<Modal
			type={type}
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			radius="none"
			className="bg-orange-500 top-12 sm:top-0">
			<ModalContent>
				{() => (
					<>
						<ModalBody className="px-8 pt-6">
							<FaLock className="text-orange-300 mx-auto my-4 size-6" />
							<FormLogin onFormChange={handleFormChange} errors={errors} />
						</ModalBody>
						<ModalFooter className="flex justify-center">
							<Submit onSubmitChange={handleSubmit} submit='CONNEXION' />
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	</>);
}
