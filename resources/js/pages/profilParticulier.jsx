// import React
import { useEffect, useState } from "react";

// import NextUI
import { Button } from "@nextui-org/react";

// import composants
import Main from "../components/MainSection/MainSection";
import { NAVUSER } from "../components/data/dataGeneric";
import { ChildUser } from "../constants/constProfil";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProfilParticulier() {

	const [navState, setNavState] = useState('PROFIL');

	const handleNavChange = (newNavState) => {
		console.log('etat :' + navState);
		setNavState(newNavState);
	};

	const [userInfo, setUserInfo] = useState({
		isUser: false,
		user: {},
		ville: {}
	});

	const navigate = useNavigate();

	const fetchCurrentUser = async() =>{
		try{
			const response = await axios.get('/api/auth/getCurrentUser');
			setUserInfo(response.data);
			// Si l'utilisateur n'est pas connecté, bloque le profil -> à décommenter
			// if(!response.data.isUser){
			// 	navigate('/'):
			// }	
		} catch (error) {
			console.error("Erreur lors de la récupération des informations de l'utilisateur :", error);
		}
	}

	useEffect(() =>{
		fetchCurrentUser();
	}, [navigate]);

	const handleUpdateInfos= (updatedInfo) => {
		setUserInfo(prevState => ({
			...prevState,
			user: {
				...prevState.user,
				...updatedInfo.user
			},
			ville: {
				...prevState.ville,
				...updatedInfo.ville
			}
		}))
	}

	const Nav = NAVUSER.map(i =>
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
				<Main section="title" title={`${userInfo.user.prenom}` + " " + `${userInfo.user.nom}`}  subtitle='Votre compte' />
				<div className="flex flex-col mx-auto w-9/12 py-8">
					<div className="flex flex-row ml-8">
						{Nav}
					</div>
					<section className="bg-white px-8 pt-8">
						<ChildUser userInfo={userInfo} handleUpdateInfos={handleUpdateInfos} navState={navState} />
					</section>
				</div>
			</div>
		</>
	);
}