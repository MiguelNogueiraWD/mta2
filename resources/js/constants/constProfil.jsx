// import React
import { useEffect, useState } from "react";

// import composant
import User from "../components/form/profil/user";
import Command_U from "../components/form/admin/user/command_U"
import Command_R from "../components/form/admin/restaurant/command_R"
import Description from "../components/form/admin/restaurant/desciption";
import Restaurant from "../components/form/profil/restaurant";
import AdminMenu from "../components/form/admin/restaurant/adminMenu";
import Livreur from "../components/form/profil/livreur";
import Command_L from "../components/form/admin/livreur/command_L";
import Wallet from "../components/form/admin/wallet";

export const ChildUser = ({ handleUpdateInfos, userInfo, navState }) => {
	switch (navState) {
		case 'PROFIL':
			return <User userInfo={userInfo} onUpdate={handleUpdateInfos}/>;
		case 'COMMANDE':
			return <Command_U />;
		case 'WALLET':
			return <Wallet />;
	}
}

export const ChildLivreur = ({ handleUpdateInfos, livreurInfo, finalisation, navState }) => {
	switch (navState) {
		case 'PROFIL':
			return <Livreur livreurInfo={livreurInfo} onUpdate={handleUpdateInfos} finalisation={finalisation} />;
		case 'GESTION':
			return <Command_L />;
		case 'WALLET':
			return <Wallet />;
	}
}

export const ChildRestaurant = ({ handleUpdateInfos, adminRestoInfo, navState }) => {
	switch (navState) {
		case 'PROFIL':
			return <Restaurant adminRestoInfo={adminRestoInfo} onUpdate={handleUpdateInfos} />;
		case 'DESCRIPTIF':
			return <Description />;
		case 'MENU':
			return <AdminMenu />;
		case 'COMMANDES':
			return <Command_R />;
		case 'WALLET':
			return <Wallet />;
	}
}
