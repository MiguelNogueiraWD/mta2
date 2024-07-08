import { PlanOneMonth, PlanThreeMonth, PlanSixMonth } from "./restaurantPlan";

export default function PlanOffer() {
	return (
		<section className="flex flex-col max-w-[20rem] mx-auto sm:max-w-[54rem] sm:flex-row sm:items-center sm:my-4">
			<PlanOneMonth />
			<PlanThreeMonth />
			<PlanSixMonth />
		</section>);
}