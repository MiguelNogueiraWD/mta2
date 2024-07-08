import QualityCard from "./qualityCard.jsx";
import RestaurantCard from './restaurantCard.jsx';

// data
import { QUALITY, RESTAURANT } from "../data/dataCard.jsx";

export function Quality() {
	return (
		<div className="py-5 sm:py-24 ">
			<QualityCard quality={QUALITY} />
		</div>
	);
}

export function RestaurantList() {
	return (
		<div className=" py-5 sm:py-24">
			<RestaurantCard restaurant={RESTAURANT} />
		</div>
	);
}