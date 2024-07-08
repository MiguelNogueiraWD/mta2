// import NextUI
import { Checkbox } from "@nextui-org/react";

// import fa icon
import { FaStar, FaRegStar } from "react-icons/fa";

//Import composant checkbox, help
import Category from "./category";
import Help from "../carte/help/help.jsx";

// import data
import { FILTER, OPTIONS } from '../../data/dataFilter.jsx';


export default function FilterRestaurant() {
	return (
		<section className="flex flex-col w-full mx-auto sm:basis-1/4">
			<div className="p-2 bg-gray-400 rounded-md">
				<p className="text-white text-center">Voir sur le plan</p>
			</div>
			<div className="bg-white h-auto p-4 sm: mt-4">
				<h3 className="text-lg ">Filtres</h3>

				<hr className="divide-x-2 divide-solid  my-2" />
				<div>
					<p className="text-medium mb-2">Type</p>
					<div className="flex flex-col gap-1">
						<Category filter={FILTER} />
					</div>
				</div>
				<hr className="divide-x-2 divide-solid my-2" />
				<div>
					<p className="text-medium mb-2">Notes</p>
					<div className="flex flex-col gap-1">
						<Checkbox size="sm">
							<div className="flex flex-row text-yellow-400">
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
								<FaStar />
							</div>
						</Checkbox>
						<Checkbox size="sm">
							<div className="flex flex-row">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaRegStar className="text-gray-400" />
							</div>
						</Checkbox>
						<Checkbox size="sm">
							<div className="flex flex-row">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
							</div>
						</Checkbox>
						<Checkbox size="sm">
							<div className="flex flex-row">
								<FaStar className="text-yellow-400" />
								<FaStar className="text-yellow-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
							</div>
						</Checkbox>
						<Checkbox size="sm">
							<div className="flex flex-row">
								<FaStar className="text-yellow-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
								<FaRegStar className="text-gray-400" />
							</div>
						</Checkbox>
					</div>
					<hr className="divide-x-2 divide-solid my-2" />
					<div>
						<p className="text-medium mb-2">Type</p>
						<div className="flex flex-col gap-1">
							<Category filter={OPTIONS} />
						</div>
					</div>
					<hr className="divide-x-2 divide-solid my-2" />
				</div>
			</div>
			<Help/>
		</section >
	);
}