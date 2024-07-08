import { FaRegCreditCard, FaBuilding, FaBagShopping, FaRegMoneyBill1, FaFilePen, FaMobileScreen } from "react-icons/fa6";
import Pizza from '../../assets/img/plats/pizza_1.jpg';
import Sushi from '../../assets/img/plats/sushi_1.jpg';
import Entree from '../../assets/img/plats/entree_1.jpg';
import Beef from '../../assets/img/plats/rumpsteak_1.jpg';
import Choux from '../../assets/img/plats/sauerkraut_1.jpg';
import Hamburger from '../../assets/img/plats/hamburger_1.jpg';


export const QUALITY = [
	{ id: 1, title: "+ 1000 Restaurants", text: "toto est à la maison", icon: <FaBuilding /> },
	{ id: 2, title: "+ 1000 Food Menu", text: "Lorem ipsum", icon: <FaBagShopping /> },
	{ id: 3, title: "Delivery or Takeaway", text: "Lorem ipsum", icon: <FaRegMoneyBill1 /> },
	{ id: 4, title: "Mobile support", text: "Lorem ipsum", icon: <FaFilePen /> },
	{ id: 5, title: "Cash payment", text: "Lorem ipsum", icon: <FaMobileScreen /> },
	{ id: 6, title: "Secure card payment", text: "Lorem ipsum", icon: <FaRegCreditCard /> },
];

export 	const RESTAURANT = [
	{ id: 1, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Pizza, status1: "TakeAway", status2: "Delivery", popular:true, },
	{ id: 2, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Sushi, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 3, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Entree, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 4, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Beef, status1: "TakeAway", status2: "Delivery", popular:true, },
	{ id: 5, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Choux, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 6, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time: "ouvert à 17 h", img: Hamburger, status1: "TakeAway", status2: "Delivery", popular:true, },
];