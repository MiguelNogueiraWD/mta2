//Data for restaurants list page

//Imports img
import Pizza from '../../assets/img/plats/pizza_1.jpg';
import Sushi from '../../assets/img/plats/sushi_1.jpg';
import Entree from '../../assets/img/plats/entree_1.jpg';
import Beef from '../../assets/img/plats/rumpsteak_1.jpg';
import Choux from '../../assets/img/plats/sauerkraut_1.jpg';
import Hamburger from '../../assets/img/plats/hamburger_1.jpg';

export 	const RESTAURANT = [
	{ id: 1, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 8, time2: 12, time3: 13, time4: 17, img: Pizza, status1: "TakeAway", status2: "Delivery", popular:true, },
	{ id: 2, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 9, time2: 12, time3: 13, time4: 23, img: Sushi, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 3, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 8, time2: "none", time3: "none", time4: 22, img: Entree, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 4, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 10, time2: 12, time3: 13, time4: 17, img: Beef, status1: "TakeAway", status2: "Delivery", popular:true, },
	{ id: 5, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 8, time2: "none", time3: "none", time4: 17, img: Choux, status1: "TakeAway", status2: "Delivery", popular:false, },
	{ id: 6, title: "Sushi Gold", subTitle: "Sushi / Japanese", adress: "26 rue des Capucins", time1: 7, time2: 12, time3: 13, time4: 16, img: Hamburger, status1: "TakeAway", status2: "Delivery", popular:true, },
];