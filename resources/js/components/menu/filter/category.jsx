// import NextUI
import { Checkbox } from "@nextui-org/react";

export default function Category({ filter }) {
	const category = filter.map(i =>
		<div key={i.id} className="flex gap-4">
			<Checkbox size="sm">{i.category}</Checkbox>
		</div>
	);
	return (
		<>
			{category}
		</>
	);
}