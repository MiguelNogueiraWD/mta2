// import component
import HomeTitle from "../basic_components/homeTitle";
import { RestaurantList } from "../card/card";

export default function Popular() {
	return (
		<section className="my-12 max-w-7xl mx-auto">
			<HomeTitle h2="Choose from Most Popular" h3="“Food is not rational. Food is culture, habit, craving, and identity”" />
			<RestaurantList />
		</section>
	);
}