import { Card, CardBody, CardHeader } from "@nextui-org/react";

export function PlanOneMonth() {
	return (
		<Card className="flex justify-center size-80 sm:w-72 mx-auto mb-4 sm:pb-5 z-0"
			shadow="sm"
			radius="none"
		>
			<CardHeader className="flex justify-center border-b">
				<h2 className="text-3xl">1 Month Plan</h2>
			</CardHeader>
			<CardBody className="flex flex-col flex-none">

				<div className="flex justify-center my-4">
					<div className="flex justify-center w-24 h-24 rounded-full bg-black text-white">
						<p className="flex self-center text-4xl text-center indent-0.5 after:content-['€'] pb-1">99</p>
					</div>
				</div>
				<div className="">
					<ul className="text-center">
						<li><strong>Check and go</strong> included</li>
						<li><strong>1 month</strong> valid</li>
						<li><strong>Unsubscribe</strong> anytime</li>
					</ul>
				</div>
			</CardBody>
		</Card>
	);
}

export function PlanThreeMonth() {
	return (
		<div className="">
			<img src="src/assets/img/ribbon_popular.png" alt="" className="popular_2" />
			<Card className="flex justify-center w-80 mx-auto mb-4 z-10 border-orange-400 border-2"
				shadow="sm"
			>

				<CardHeader className="flex justify-center border-b">
					<h2 className="text-3xl">3 Month Plan</h2>
				</CardHeader>
				<CardBody className="flex flex-col p-4 ml-1">
					<div className="flex justify-center my-4">
						<div className="flex justify-center w-24 h-24 rounded-full bg-orange-400 text-white">
							<p className="flex self-center text-4xl text-center indent-0.5 after:content-['€'] pb-1">199</p>
						</div>
					</div>
					<div className="">
						<ul className="text-center">
							<li><strong>Premium</strong> support</li>
							<li><strong>Check and go</strong> included</li>
							<li><strong>APP</strong> included</li>
							<li><strong>3 months</strong> valid</li>
							<li><strong>Unsubscribe</strong> anytime</li>
						</ul>
					</div>
				</CardBody>

			</Card>
		</div>
	);
}

export function PlanSixMonth() {
	return (
		<Card className="flex justify-center size-80 sm:w-72 mx-auto sm:mx-0 mb-4"
			shadow="sm"
			radius="none"
		>
			<CardHeader className="flex justify-center border-b">
				<h2 className="text-3xl">6 Month Plan</h2>
			</CardHeader>
			<CardBody className="flex flex-col flex-none">
				<div className="flex justify-center my-4">
					<div className="flex justify-center w-24 h-24 rounded-full bg-black text-white">
						<p className="flex self-center text-4xl text-center indent-0.5 after:content-['€'] pb-1">299</p>
					</div>
				</div>
				<div className="">
					<ul className="text-center">
						<li><strong>Premium</strong> support</li>
						<li><strong>Check and go</strong> included</li>
						<li><strong>6 months</strong> valid</li>
						<li><strong>Unsubscribe</strong> anytime</li>
					</ul>
				</div>
			</CardBody>
		</Card>
	);
}