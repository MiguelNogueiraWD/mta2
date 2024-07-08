export default function HomeTitle(props) {
	const h2 = props.h2;
	const h3 = props.h3;
	return (
		<div>
			<h2 className=" text-center text-3xl sm:text-5xl">{h2}</h2>
			<h3 className=" text-center text-xs sm:text-xl">{h3}</h3>
		</div>
	);
}