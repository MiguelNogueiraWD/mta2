//Imports React
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


// import NextUI
import {
    useDisclosure
} from "@nextui-org/react";

//Imports here
import ProfilMobile from './header-components/Profil/ProfilMobile';
import ProfilDesk from './header-components/Profil/ProfilDesk';
import Register from '../form/formulaireInscription/register';
import Login from '../form/formulaireInscription/login';

// import data
import { NAVGLOBAL } from '../data/dataGeneric';

//Imports images
import Logout from './header-components/Logout';
import logo from '../../assets/img/logos/logo.png';
import logoMobile from '../../assets/img/logos/logo_mobile.png';

//Imports librarys
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

//Imports CSS
import '../../css/style.css';


//Function Header
function Header() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [type, setType] = useState('login');
    const [login, setLogin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const types = [
        "login",
        "register"
    ];

    const handleOpen = (type) => {
        // console.log(type);
        setType(type)
        onOpen();
    }

    const handleLogChange = (status) =>{
        setIsAuthenticated(status);
        // console.log("isAuthenticated : " + status);
    }

    // I check connexion & session in Laravel (App\Http\Controllers\Auth;)
    const checkAuth = async () => {
        try {
            const response = await axios.get('api/auth/checkAuth', { withCredentials: true });
            // console.log('checkAuth response:', response.data);
            if (response.data.authenticated) {
                setLogin(true);
            } else {
                setLogin(false);
            }
        } catch (error) {
            console.error("Erreur lors de l'authentification : " + error);
            setLogin(false);
        }
    };

    useEffect(() => {
        console.log("useEffect auth : " + isAuthenticated);
        // if connexion is success, check with checkAuth()
        if(isAuthenticated || !isAuthenticated){
            checkAuth(); 
        }
    }, [isAuthenticated]);

    //Box login register
    const loginRegister = (
        <div className='flex flex-col sm:flex-row sm:gap-4'>
            {types.map((type) => (
                <NavLink
                    key={type}
                    to='/'
                    className='hover:text-black '
                    onClick={() => handleOpen(type)}>{type}</NavLink>
            ))}
            {isOpen && (
                <>
                    {type === 'login' && <Login type={type} isOpen={isOpen} onOpenChange={onOpenChange} onLoginChange = {handleLogChange}/>}
                    {type === 'register' && <Register type={type} isOpen={isOpen} onOpenChange={onOpenChange} registerConnected={handleLogChange} />}
                </>
            )}
        </div>
    );

    //Toggle mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navGlobal = NAVGLOBAL.map(i =>
        <NavLink
            key={i.id}
            to={i.to}
            className='hover:text-black '
        >
            {i.nav}
        </NavLink>
    );


    //Composant commence ici:
    return (
        <header className=' bg-primary-brand fixed z-50 w-full flex justify-between items-center lg:justify-between p-3'>

            {/* Logo desktop */}
            <a className='hidden w-40 sm:inline-block' href="../public/index.html">
                <img className='object-fill object-center' src={logo} alt="#logo" />
            </a>

            {/* Logo mobile */}
            <a className='sm:hidden w-20' href="../public/index.html">
                <img className='object-fill object-center' src={logoMobile} alt="#logo-mobile" />
            </a>

            {/* MOBILE MENU */}
            <RxHamburgerMenu className='lg:hidden text-3xl text-white' onClick={toggleMobileMenu} />
            <nav className={`sm:hidden z-10 bg-white absolute left-0 top-0 w-full h-full p-5 flex flex-col justify-start text-3xl ${isMenuOpen ? '' : 'hidden'}`} >
                <div className='cross'>
                    <RxCross1 onClick={toggleMobileMenu} />
                </div>
                <div>
                    {login ? <ProfilMobile /> : ''}{/*If you are not loged return a elements if loged in return profile component*/}
                </div>
                <div className='flex flex-col'>
                    <a href="#home" className='py-2 lg:p-3 '>Home</a>
                    <a href="#aboutus" className='py-2 lg:p-3 '>About Us</a>
                    <a href="#faq" className='py-2 lg:p-3 '>Faq</a>
                </div>
                <div>
                    {login ? <Logout onLogoutChange={handleLogChange} /> : loginRegister}
                </div>
            </nav>

            {/* DESKTOP MENU */}
            <nav className='text-sm hidden lg:flex text-white sm:gap-4 sm:mr-4'>
                {navGlobal}
                {login ? <ProfilDesk onLogoutChange={handleLogChange}  /> : loginRegister}{/*If you are not loged return a elements if loged in return profile component*/}
            </nav>
        </header>
    );
}

export default Header;
