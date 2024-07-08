
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// import composants
import Main from "../components/MainSection/MainSection";
import UserI from "../components/form/formulaireInscription/userInsciption";

export default function InscriptionUser() {

	const navigate = useNavigate();
	const [ userInfo, setUserInfo ] = useState({
		isUser: false,
		user: {},
		ville: {}
	});

	const fetchCurrentUser = async()=>{
		try{
			const response = await axios.get('api/auth/getCurrentUser');
			console.log("reponse gurrentUser " + response.data.user.nom);
			setUserInfo(response.data);
			if (!response.data.isUser) {
                navigate('/');
            }

		} catch (error) {
			console.error("Erreur lors de la récupération des informations du particulier :", error);
		}
	};
	
	useEffect(() => {
		fetchCurrentUser();
	}, [navigate]);

	return (
		<>
			<div className="bg-gray-200">
				<Main section='title' title="formulaire d'inscription" subtitle=''/>
				<div className="flex flex-col mx-auto py-8 max-w-screen-md rounded-sm">
					<section className="bg-white min-w-max px-8 pt-8">
						<UserI userInfo={userInfo}/>
					</section>
				</div>
			</div>
		</>
	);
}