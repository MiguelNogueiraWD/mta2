// import React
import React from "react";

// import nextUI
import { Button, Divider, Input } from "@nextui-org/react";

// import icon
import { FaCartArrowDown } from "react-icons/fa";

export default function YourCommand() {

	const classInput = React.useMemo(
		() => ({
			inputWrapper: ["bg-white", "font-bold"],
			input: ["font-bold"],
			innerWrapper: ["bg-white", "font-bold"],

		}),
		[],
	);

	return (<>
		<aside className="sm:w-4/12 mx-auto p-4">
			<div className="flex flex-row justify-between p-2 text-md font-small bg-gray-200 sm:m-0 sm:p-4 sm:text-xl">
				<h3>Votre commande</h3>
				<p><FaCartArrowDown /></p>
			</div>
			<div className="flex flex-col sm:gap-y-6 mt-6">
				<div className="flex flex-row justify-between">
					<p>Référence de commande</p>
					<p>yFkXJV86</p>
				</div>
				<div className="flex flex-row justify-between">
					<p>Sous-total</p>
					<div className="flex flex-row items-baseline">
						<Input
							name="subTotal"
							id="subTotal"
							type="number" value="0"
							size="sm"
							radius="none"
							className="mb-4 w-10"
							classNames={classInput}
							isReadOnly />
						<p>€</p>
					</div>
				</div>
				<div className="flex flex-row justify-between font-bold">
					<p>TOTAL</p>
					<div className="flex flex-row items-baseline">
						<Input
							name="total"
							id="total"
							type="number" value="0"
							size="sm"
							radius="none"
							className="mb-4 w-10"
							classNames={classInput}
							isReadOnly />
						<p>€</p>
					</div>
				</div>
			</div>
			<Divider className="my-4" />
			<Button
				className="flex w-full p-6 mt-3 bg-orange-500 hover:bg-gray-700 h-7 text-white"
				radius="sm">
				passer ma commande
			</Button>
			<Button
				className="flex w-full p-6 mt-3 hover:bg-gray-400 hover:text-white h-7"
				radius="sm"
				variant="bordered">
				continuer mes achats
			</Button>
		</aside>
	</>);
}