// import React
import { NavLink } from "react-router-dom";

// import component
import Logout from "../Logout";

export default function ProfilMenuDesk({onLogoutChange}){

    const handleLogChange = (status) =>{
        onLogoutChange(status);
    }

    return(
        <div className="menu-desktop flex flex-col">
                <NavLink to='/profilLivreur'>Profil</NavLink>
                <NavLink><Logout onLogoutChange={handleLogChange}/></NavLink>
        </div>
    );
};