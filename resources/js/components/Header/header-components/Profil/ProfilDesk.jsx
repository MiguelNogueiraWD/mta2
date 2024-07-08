//Imports react
import { useEffect, useState } from "react";

//Imports NextUI
import { User } from "@nextui-org/react";

//Imports
import ProfilMenuDesk from './ProfilMenuDesk';
import axios from "axios";

import AvatarDefault from '../../../../../../public/images/img_user/avatarDefaultMtakeaway.png';

function ProfilDesk({ onLogoutChange }) {


    // Fonctionement toggle menu
    const [menuVisible, setMenuVisible] = useState(false);
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [avatar, setAvatar] = useState(AvatarDefault);
    

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const currentUser = async () => {
        const response = await axios.get('api/auth/getCurrentUser');
        let avatarSrc = " ";
        if(response.data.user.image === ""){
            avatarSrc = AvatarDefault
        }else{
            avatarSrc =  `/images/img_user/${response.data.user.image}`
        }
        setName(response.data.user.nom);
        setFirstname(response.data.user.prenom);
        setAvatar(avatarSrc);
    }

    useEffect(() => {
        currentUser()
    }, []);


    //Le composant commence ici:
    return (
        <>
            <User
                className="cursor-pointer text-white"
                name={`${name}` + " " + `${firstname}`}
                avatarProps={{ src: avatar}}
                onClick={toggleMenu}
            />
             
            {menuVisible && <ProfilMenuDesk onLogoutChange={onLogoutChange} />}
        </>
    )
}

export default ProfilDesk;