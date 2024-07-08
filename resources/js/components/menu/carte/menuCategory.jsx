// import composants
import TableItem from "./tableItem";

export default function MenuCategory({ menuCategory }) {
	const CategoryMenu = menuCategory.map(i => (
		<>
			<div key={i.id}
				className="mb-2">
				<h3 className="text-xl">{i.title}</h3>
				<p>{i.description}</p>
			</div>
			<TableItem />
		</>
	))
	return (
		<>
			{CategoryMenu}
		</>
	);
}