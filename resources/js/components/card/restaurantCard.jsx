// import NextUI
import { Card, CardBody } from "@nextui-org/react";

export default function RestaurantCard({ restaurant }) {

	const cardRestaurant = restaurant.map(i =>
		<Card key={i.id}
			className="sm:w-2/5 mx-4 sm:mx-0"
			shadow="sm"
			radius="none">
			<div className="popular"></div>
			<CardBody className="flex flex-row">
				<div className="flex">
					<div className="w-15 h-15 sm:w-40 sm:h-40">
						<img src={i.img} />
					</div>
					<div className="mx-2 sm:mx-4">
						<h3 className="text-orange-400 text-lg sm:text-2xl">{i.title}</h3>
						<p className="text-xs italic">{i.subTitle}</p>
						<p className="text-sm mt-2 sm:mt-4">{i.adress}</p>
						<p className="text-sm mb-3 text-orange-400">{i.time}</p>
						<ul className="flex flex-row text-sm">
							<li className="list-image-check ml-7 mr-5"><span>{i.status1}</span></li>
							<li className="list-image-nocheck ml-5"><span>{i.status2}</span></li>
						</ul>
					</div>
				</div>
			</CardBody>
		</Card>
	);

	return (
		<section className="flex flex-row flex-wrap justify-center my-10 container mx-auto gap-6">
			{cardRestaurant}
		</section>
	);
}