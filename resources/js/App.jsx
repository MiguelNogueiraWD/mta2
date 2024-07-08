// import Router
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react'

// import CSS
import './css/style.css'

// import axios + config cookies/session
import axios from 'axios';
axios.defaults.withCredentials = true;

// import components
import Home from './pages/home.jsx';
import AboutUs from './pages/about_us.jsx';
import FormInscriptionRestaurant from './pages/formInscriptionRestaurant.jsx';
import FormInscriptionLivreur from './pages/formInscriptionLivreur.jsx';
import Order from './pages/order.jsx';
import ProfilParticulier from './pages/profilParticulier.jsx';
import PageFaq from './pages/pageFaq.jsx';
import ProfilRestaurant from './pages/profilRestaurant.jsx';
import ProfilLivreur from './pages/profilLivreur.jsx';
import GeoRestaurant from './pages/geoRestaurant.jsx';
import ListRestaurants from './pages/listeRestaurants';
import Header from './components/Header/Header.jsx';
import Footer from './components/footer.jsx';
import InscriptionUser from './pages/formInscriptionUser.jsx';
import PageMenu from './pages/pageMenu.jsx';


function App() {
  const navigate = useNavigate();


  return (
    <NextUIProvider navigate={navigate}>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/geoRestaurant' element={<GeoRestaurant />} />
        <Route path='/formInscriptionRestaurant' element={<FormInscriptionRestaurant />} />
        <Route path='/formInscriptionLivreur' element={<FormInscriptionLivreur />} />
        <Route path='/formInscriptionUser' element={<InscriptionUser />} />
        <Route path='/profilParticulier' element={<ProfilParticulier />} />
        <Route path='/profilRestaurant' element={<ProfilRestaurant />} />
        <Route path='/profilLivreur' element={<ProfilLivreur />} />
        <Route path='/inscriptionUser' element={<InscriptionUser />} />
        <Route path='/pageFaq' element={<PageFaq />} />
        <Route path='/about_us' element={<AboutUs />} />
        <Route path='/order' element={<Order />} />
        <Route path='/listeRestaurants' element={<ListRestaurants />} />
        <Route path='/pageMenu' element={<PageMenu />} />
      </Routes>
      <Footer />
    </NextUIProvider >
  )
}


export default App
