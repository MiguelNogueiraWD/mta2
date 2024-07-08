// import React
import { useNavigate } from "react-router-dom";

//import axios
import axios from "axios";

export default function Logout({ onLogoutChange }) {

	const navigate=useNavigate();

    const doLogout = async() =>{
        try {
			const response = await axios.delete('/api/logout');
			
			if (response.status === 200) {	
				console.log('Utilisateur déconnecté');
                onLogoutChange(false);
				navigate('/');
			} else {
				console.error('Erreur connexion :', response.data.error);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	  };

    return( 
        <button type="submit" onClick={doLogout} id="logout" className="text-red-600">Déconnexion</button>
    );
}