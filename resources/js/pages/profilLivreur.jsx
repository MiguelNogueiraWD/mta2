// import React
import { useEffect, useState } from "react";

// import NextUI
import { Button } from "@nextui-org/react";

// import composants
import Main from "../components/MainSection/MainSection";
import { NAVLIVREUR } from "../components/data/dataGeneric";
import { ChildLivreur } from "../constants/constProfil";

import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function ProfilLivreur() {

	const [navState, setNavState] = useState('PROFIL');

	const handleNavChange = (newNavState) => {
		console.log('etat :' + navState);
		setNavState(newNavState);
	};

	const finalisation= false;

	const [livreurInfo, setLivreurInfo] = useState({
		isLivreur: false,
		user: {},
		livreur: {}
	});

	const navigate = useNavigate();

	const fetchLivreurInfo = async () => {
		try {
			const response = await axios.get('/api/getLivreurInfo');
			setLivreurInfo(response.data);
			// Si l'utilisateur n'est pas livreur, bloque le profil -> à décommenter
			// if (!response.data.isLivreur) {
			// 	navigate('/');
			// }
		} catch (error) {
			console.error("Erreur lors de la récupération des informations du livreur :", error);
		}
	};

	useEffect(() => {
		fetchLivreurInfo();
	}, [navigate]);

	const handleUpdateInfos = (updatedInfo) => {
		setLivreurInfo(prevState => ({
			...prevState,
			user: {
				...prevState.user,
				...updatedInfo.user
			},
			livreur: {
				...prevState.livreur,
				...updatedInfo.livreur
			}
		}));
	};

	const Nav = NAVLIVREUR.map(i =>
		<Button
			key={i.key}
			onClick={() => handleNavChange(i.nav)}
			className='p-3 bg-white hover:text-orange-500 mr-2'
			variant="flat"
			radius="none"
		>
			{i.nav}
		</Button>
	)

	return (
		<>
			<div className="bg-gray-200">
				{/* <Main section="title" title={`${livreurInfo.user.prenom}` + " " + `${livreurInfo.user.nom}`} subtitle='Administration de votre compte' profil='livreur' /> */}
				<Main section="title" title={``} subtitle='Administration de votre compte' profil='livreur' />
				<div className="flex flex-col mx-auto w-9/12 py-8">
					<div className="flex flex-row ml-8">
						{Nav}
					</div>
					<section className="bg-white px-8 pt-8">
						<ChildLivreur livreurInfo={livreurInfo} handleUpdateInfos={handleUpdateInfos} finalisation={finalisation} navState={navState} />
					</section>
				</div>
			</div>
		</>
	);
}