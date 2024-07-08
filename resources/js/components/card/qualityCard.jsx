import { Card, CardBody } from "@nextui-org/react";

export default function QualityCard({ quality }) {

	const cardQuality = quality.map(i =>
		<Card key={i.id}
			className=" w-full xl:w-2/5 mt-2 mx-4 sm:mt-4 sm:mx-16"
			shadow="sm"
			radius="none">
			<CardBody className="flex flex-row ">
				<div className="w-10 h-10 rounded-full border-1 border-dashed sm:w-16 sm:h-16">
					<p className="flex justify-center text-center p-2 my-1 text-orange-400 sm:my-2 sm:text-3xl">{i.icon}</p>
				</div>
				<div className="mx-2 sm:mx-4">
					<h3 className="text-orange-400 text-lg sm:text-2xl">{i.title}</h3>
					<p  className="text-xs sm:text-sm">{i.text}</p>
				</div>
			</CardBody>
		</Card>
	);

	return (
		<section className=" w-full xl:flex xl:justify-center xl:flex-row xl:flex-wrap">
			{cardQuality}
		</section>
	);
}