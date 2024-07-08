import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import components
import Main from "./../components/MainSection/MainSection";
import FormRestaurant from "../components/form/formulaireInscription/formRestaurant";


export default function FormInscriptionRestaurant() {

	const navigate = useNavigate();
	const [adminRestoInfo, setAdminRestoInfo] = useState({
		isAdminResto: false,
		user: {},
		professionnel: {},
		ville: {}
	});

	const fetchAdminInfo = async () => {
        try {
            const response = await axios.get('/api/getAdminInfo');
            setAdminRestoInfo(response.data);
            // if (!response.data.isAdminResto) {
            //     navigate('/');
            // }
        } catch (error) {
            console.error("Erreur lors de la récupération des informations de l'admin :", error);
        }
    };

	useEffect(()=>{
		fetchAdminInfo();
	}, [navigate]);

	return (
		<>
			<div className="bg-gray-200">
				<Main section='title' title="formulaire d'inscription" subtitle=""/>
				<div className="flex flex-col mx-auto py-8 max-w-screen-md">
					<section className="bg-white min-w-max px-8 pt-8">
						<FormRestaurant adminRestoInfo= { adminRestoInfo } />
					</section>
				</div>
			</div>
		</>
	)
}