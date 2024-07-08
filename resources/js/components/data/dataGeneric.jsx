// import favicon
import { FaBold, FaItalic, FaUnderline, FaEraser, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignJustify } from "react-icons/fa";
import { ImFontSize } from "react-icons/im";
import { AiOutlineOrderedList , AiOutlineUnorderedList } from "react-icons/ai";

export const NAVGLOBAL = [
    {id: 1, nav: 'Home', to: '/', type: 'exact'},
    {id: 2, nav: 'Inscription restaurant', to: '/formInscriptionRestaurant'},
    {id: 3, nav: 'Inscription livreur', to: '/formInscriptionLivreur'},
    {id: 4, nav: 'profil particulier', to: '/profilParticulier'},
    {id: 5, nav: 'profil restaurant', to: '/profilRestaurant'},
    {id: 6, nav: 'profil livreur', to: '/profilLivreur'},
    {id: 7, nav: 'About Us', to: '/about_us'},
    {id: 8, nav: 'Faq', to: '/pageFaq'},
    // {id: 9, nav: 'Inscription particulier', to: '/inscriptionUser'},
    {id: 10, nav: 'list', to: '/listeRestaurants'},
    {id: 11, nav: 'menu', to: '/pageMenu'},
]

export const NAVUSER = [
    {id: 1, nav: 'PROFIL'},
    {id: 2, nav: 'COMMANDE'},
    {id: 3, nav: 'WALLET'},
]

export const NAVLIVREUR = [
    {id: 1, nav: 'PROFIL'},
    {id: 2, nav: 'GESTION'},
    {id: 3, nav: 'WALLET'},
]

export const NAVRESTAURANT = [
    {id: 1, nav: 'PROFIL'},
    {id: 2, nav: 'DESCRIPTIF'},
    {id: 3, nav: 'MENU'},
    {id: 4, nav: 'COMMANDES'},
    {id: 5, nav: 'WALLET'},
]

export const DESCRIPTION_R = [
    {id: 1, icon: <FaBold />},
    {id: 2, icon: <FaItalic />},
    {id: 3, icon: <FaUnderline />},
    {id: 4, icon: <FaEraser />},
    {id: 5, icon: <FaStrikethrough />},
    {id: 6, icon: <ImFontSize />},
    {id: 7, icon: <AiOutlineOrderedList />},
    {id: 8, icon: <AiOutlineUnorderedList />},
    {id: 9, icon: <FaAlignLeft />},
    {id: 10, icon: <FaAlignCenter />},
    {id: 11, icon: <FaAlignJustify />},
]