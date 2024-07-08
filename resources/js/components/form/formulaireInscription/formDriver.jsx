// import react
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// composant
import FormLicence from '../composants/formLicence';
import Submit from '../composants/submit';
import FormPro from '../composants/formPro';
import { FormFile } from '../composants/formFileLicence';

// data
import { FILE } from '../../data/selectItem';
import { inputFile } from "../../../constants/utils";


export default function FormDriver({ livreurInfo }) {

	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);

	const finalisation = true;

	const [isSubmit, setIsSubmit] = useState(false);
	const navigate = useNavigate();

	const [fileValue, setFileValue] = useState({
		'licence': '',
		'identite': '',
		'permis': '',
		'casier': '',
		'photo': ''
	});

	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		mail: '',
		telephone: '',
		licence: '',
		identite: '',
		permis: '',
		siret: ''
	})

	const handleFormChange = (name, value) => {
		setFormData(prevState => ({ ...prevState, [name]: value }));
	}

	const handleSubmit = () => {
		console.log("soumettre soumis")
		console.log("formule : " + formData.formule);
		setIsSubmit(true);
	}

	const updateLivreur = async () => {
		try {
			const response = await axios.post('/api/updateLivreur', formData)
			if (response.data && response.data.success) {
				console.log("Inscription livreur finalisée avec succès");
				setIsSubmit(false);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
			setIsSubmit(false);
		}
	}

	useEffect(() => {
		if (isSubmit) {
			updateLivreur();
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
		<div className='flex flex-col justify-center w-full sm:w-auto'>
			<div className='m-4 sm:mt-2 sm:mx-4'>
				<h2 className='flex justify-center mb-6 text-2xl sm:text-3xl'>Finalisez votre inscription livreur</h2>
				<div>
					<FormPro livreurInfo={livreurInfo} onFormChange={handleFormChange} finalisation={finalisation} />
					<div className='flex flex-row gap-4'>
						<FormLicence livreurInfo={livreurInfo} onFormChange={handleFormChange} finalisation={finalisation} />
						<div className="flex flex-col w-3/6 gap-4 content-between">
							{FILE.map(i => (
								<FormFile
									id={i.id}
									onChange={handleChange}
									name={i.name}
									label={i.label} />
							))}
						</div>
					</div>
					<div className='flex justify-center'>
						<Submit onSubmitChange={handleSubmit} submit="SOUMETTRE" />
					</div>
				</div>
			</div>
		</div>
	);
}