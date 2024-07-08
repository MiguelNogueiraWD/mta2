// react icon
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

// import images
import Pizza from '../../assets/img/plats/pizza_1.jpg';
import Sushi from '../../assets/img/plats/sushi_1.jpg';
import Beef from '../../assets/img/plats/rumpsteak_1.jpg';
import Choux from '../../assets/img/plats/sauerkraut_1.jpg';
import Hamburger from '../../assets/img/plats/hamburger_1.jpg';
import Salade from '../../assets/img/plats/salade_1.jpg';

export const COLUMNS = [
	{ name: "Plats", uid: "plats" },
	{ name: "Prix", uid: "prix" },
	{ name: <FaShoppingCart />, uid: "commande" },
];

export const PLATS = [
	{ id: 1, plats: "Salade niçoise", img: Salade, composition: "Lorem ipsum", prix: "15 €", commande: <FaCartPlus /> },
	{ id: 2, plats: "Côtes de boeuf", img: Beef, composition: "Lorem ipsum", prix: "32 €", commande: <FaCartPlus /> },
	{ id: 3, plats: "Sushi", img: Sushi, composition: "Lorem ipsum", prix: "21 €", commande: <FaCartPlus /> },
	{ id: 4, plats: "hamburger", img: Hamburger, composition: "Lorem ipsum", prix: "12 €", commande: <FaCartPlus /> },
	{ id: 5, plats: "Pizza mozarella", img: Pizza, composition: "Lorem ipsum", prix: "8 €", commande: <FaCartPlus /> },
	{ id: 6, plats: "Choucroute", img: Choux, composition: "Lorem ipsum", prix: "9 €", commande: <FaCartPlus /> },
];

export const MCATEGORY = [
	{id: 1, title: "Entrée", description: "Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea."},
	{id: 2, title: "plats", description: "Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea."},
	{id: 3, title: "dessert", description: "Te ferri iisque aliquando pro, posse nonumes efficiantur in cum. Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea."},
];