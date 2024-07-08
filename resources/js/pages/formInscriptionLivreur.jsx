// import components
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// import component
import FormDriver from "../components/form/formulaireInscription/formDriver";
import Main from "./../components/MainSection/MainSection";

export default function FormInscriptionLivreur() {

	const navigate = useNavigate();
	const [livreurInfo, setLivreurInfo] = useState({
		isLivreur: false,
		user: {},
		livreur: {}
	});

	const fetchLivreurInfo = async() => {
		try {
			const response = await axios.get('/api/getLivreurInfo');
			setLivreurInfo(response.data);
			// if(!response.data.isLivreur){
			// 	navigate('/');
			// }
		} catch (error) {
			console.error("Erreur lors de la récupération des informations du livreur :", error);
		}
	}

	useEffect(() => {
		fetchLivreurInfo();
	}, [navigate]);

	return (
		<>
			<div className="bg-gray-200">
				<Main section='title' title="formulaire d'inscription" subtitle=""/>
				<div className="flex flex-col mx-auto py-8 max-w-screen-md">
					<section className="bg-white min-w-max px-8 pt-8">
						<FormDriver livreurInfo={livreurInfo} />
					</section>
				</div>
			</div>
		</>
	)
}