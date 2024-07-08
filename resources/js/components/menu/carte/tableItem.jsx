// import react
import React from "react";

// import NextUI
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Popover,
	PopoverTrigger,
	PopoverContent,
	Button,
	CheckboxGroup,
	Checkbox,
	Divider
} from "@nextui-org/react";

// import data menu
import { PLATS, COLUMNS } from "../../data/platRestaurant.jsx";


export default function TableItem() {

	const classNamesTable = React.useMemo(
		() => ({
			wrapper: ["p-0", "text-sm"],
			th: ["bg-transparent", "text-default-500", "border-b", "border-divider", "text-lg", "first:p-0"],
			td: [
				// changing the rows border radius
				// first
				"group-data-[first=true]:first:before:rounded-none",
				"group-data-[first=true]:last:before:rounded-none",
				// middle
				"group-data-[middle=true]:before:rounded-none",
				// last
				"group-data-[last=true]:first:before:rounded-none",
				"group-data-[last=true]:last:before:rounded-none",
				"first:px-2"
			],
		}),
		[],
	);

	const classNamesPopover = React.useMemo(
		() => ({
			content: ["min-w-min", "p-4", "border-t-2", "border-orange-500", "before:bg-orange-500"],
			base: ["before:bg-orange-500"],
		}),
		[],
	);

	const renderCell = React.useCallback((menu, columnKey) => {
		const cellValue = menu[columnKey];

		switch (columnKey) {
			case "plats":
				return (
					<div className="flex flex-row justify-start tr_plat gap-2">
						<div>
							<img
								src={menu.img} alt=""
								className="w-14 h-auto sm:size-16 object-cover" />
						</div>
						<div>
							<p className="text-medium">{cellValue}</p>
							<p>{menu.composition}</p>
						</div>
					</div>
				);
			case "prix":
				return (
					<div className="flex">
						<p className="text-bold text-sm ">{cellValue}</p>
					</div>
				);
			case "commande":
				return (
					<>
						<Popover
							placement="bottom"
							radius="none"
							classNames={classNamesPopover}
							showArrow
						>
							<PopoverTrigger>
								<p className="text-orange-500 hover:text-gray-400 text-md">{cellValue}</p>
							</PopoverTrigger>
							<PopoverContent>
								<div className="py-2">
									<p className="font-bold text-sm">Ingredients supplémentaires</p>
									<Divider className="my-2" />
									<CheckboxGroup
									>
										<div className="flex flex-row text-medium w-full gap-6 justify-between">
											<Checkbox
												size="sm"
												value="1"
												className="">Extra avocat</Checkbox>
											<p>2 €</p>
										</div>
										<div className="flex flex-row text-medium w-full gap-6 justify-between">
											<Checkbox
												size="sm"
												value="2"
												className="">Extra sauce</Checkbox>
											<p>2 €</p>
										</div>
									</CheckboxGroup>
									<Button
										className="flex w-full p-1 mt-3 bg-gray-200 hover:bg-orange-500 h-7 text-orange-500 hover:text-white"
										radius="sm">
										ajouter au panier
									</Button>
								</div>
							</PopoverContent>
						</Popover>
					</>
				);
			default:
				return cellValue;
		}
	}, []);

	return (
		<Table aria-label="Menu" isStriped
			classNames={classNamesTable}
			radius="none"
			shadow="none"
			className="py-4 sm:py-0 mb-4"
		>
			<TableHeader columns={COLUMNS}
				radius="none"
				className="rounded-xl"
			>
				{(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
			</TableHeader>
			<TableBody items={PLATS}
				classNames="bg-black"
			>
				{(item) => (
					<TableRow key={item.id}
						className="rounded-none">
						{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}