// import component
import Main from "../components/MainSection/MainSection";
import MapLocalisation from "../components/map/map_localisation";
import RestaurantCardSearch from "../components/restaurants/restaurant-components/restaurantCardList";

export default function GeoRestaurant() {
	return (
		<>
			<Main section='map' />
			<div className="relative mx-auto w-9/12">
				<div className="w-[38vw]">
					<RestaurantCardSearch type='w-full' />
				</div>
					<MapLocalisation />
			</div>
		</>
	);
}