// import composant
import MenuCategory from "./menuCategory";

import { MCATEGORY } from "../../data/platRestaurant.jsx";

export default function TableMenu() {
	return (
		<>
			<section className="my-4 sm:m-0 sm:basis-2/4 bg-white">
				<h2
					className="p-2 m-2 text-md font-medium text-white bg-orange-500 mb-3 sm:m-0 sm:p-4 sm:text-xl">
					PLATS
				</h2>
				<div className="px-6 sm:p-4">
					<MenuCategory menuCategory={MCATEGORY} />
				</div>
			</section>
		</>
	);
}