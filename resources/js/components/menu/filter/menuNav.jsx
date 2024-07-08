import Help from '../carte/help/help';



export default function MenuNav() {
	return (
		<section className="flex flex-col w-full mx-auto sm:basis-1/4">
			<a href='#' className="text-white p-2 text-center bg-gray-400 rounded-md">Back to search</a>
			<div className="bg-white h-auto p-4 sm: mt-4">
                <a href="#starters">Starters</a>
				<hr className="divide-x-2 divide-solid  my-2" />
				<a href="#main-courses">Main Courses</a>
				<hr className="divide-x-2 divide-solid my-2" />
				<a href="#beef">Beef</a>
				<hr className="divide-x-2 divide-solid my-2" />
				<a href="#desserts">Desserts</a>
                <hr className="divide-x-2 divide-solid my-2" />
				<a href="#drinks">Drinks</a>
			</div>
			<Help/>
		</section >
	);
}