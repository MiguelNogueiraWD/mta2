// import composant
import MenuNav from "./filter/menuNav";
import Order from "./carte/order";
import TableMenu from "./carte/tableMenu";
import FilterRestaurant from "./filter/filter";
import ListeRestaurant from "../restaurants/ListeRestaurant";

export default function MenuComponent(props) {

	if (props.type === 1) {
		return (
			<div className="flex flex-col sm:flex-row mx-auto sm:gap-x-6 bg-gray-100 sm:w-11/12 h-auto py-8 px-4">
				<MenuNav />
				<TableMenu />
				<Order />
			</div>
		)
	} else {
		return (
			<div className="flex flex-col sm:flex-row w-4/5 gap-x-6 mx-auto bg-gray-100 py-8 px-4">
				<FilterRestaurant />
				<ListeRestaurant />
			</div>
		)
	}

}