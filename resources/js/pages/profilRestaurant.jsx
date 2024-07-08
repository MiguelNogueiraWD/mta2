// import React
import { useEffect, useState } from "react";
import axios from "axios";

// import NextUI
import { Button } from "@nextui-org/react";

// import composants
import Main from "../components/MainSection/MainSection";
import { NAVRESTAURANT } from "../components/data/dataGeneric";
import { ChildRestaurant } from "../constants/constProfil";
import { useNavigate } from "react-router-dom";


export default function ProfilRestaurant() {
	
	const [navState, setNavState] = useState('PROFIL');

	const handleNavChange = (newNavState) => {
		console.log('etat :' + navState);
		setNavState(newNavState);
	};

	const [adminRestoInfo, setAdminRestoInfo] = useState({
		isAdminResto: false,
		user: {},
		professionnel: {},
		ville: {}
	})

	const navigate = useNavigate();

	const fetchAdminRestoInfo = async()=> {
		try {
			const response = await axios.get('/api/getAdminInfo');
			setAdminRestoInfo(response.data);
			// Si l'utilisateur n'est pas adminResto, bloque le profil -> à décommenter
			// if(!response.data.isAdminResto){
			// 	navigate('/');
			// }
		} catch (error) {
            console.error("Erreur lors de la récupération des informations de l'admin restaurant :", error);
        }
	}

	useEffect(()=> {
		fetchAdminRestoInfo();
	}, [navigate]);

	const handleUpdateInfos = (updatedInfo) => {
		setAdminRestoInfo(prevState => ({
			...prevState,
			user: {
				...prevState.user,
				...updatedInfo.user
			},
			professionnel: {
				...prevState.professionnel,
				...updatedInfo.professionnel
			},
			ville: {
				...prevState.ville,
				...updatedInfo.ville
			}
		}))
	}

	const Nav = NAVRESTAURANT.map(i =>
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
				<Main section='title' title={`${adminRestoInfo.user.prenom}` + " " + `${adminRestoInfo.user.nom}`} restoName={adminRestoInfo.professionnel.nom} subtitle="compte d'administration" />
				<div className="flex flex-col mx-auto w-9/12 py-8">
					<div className="flex flex-row ml-8">
						{Nav}
					</div>
					<section className="bg-white px-8 pt-8">
						<ChildRestaurant adminRestoInfo= {adminRestoInfo} handleUpdateInfos={handleUpdateInfos} navState={navState} />
					</section>
				</div>
			</div>
		</>
	);
}