// import React
import React from "react";

// import nextUI
import { Button, Divider, Input, RadioGroup, Radio, mapPropsVariants } from "@nextui-org/react";

// import icon
import { FaCartArrowDown } from "react-icons/fa";
import Submit from "../../form/composants/submit";

export default function Order() {

	return (<>
		<aside className="sm:basis-1/4 bg-white sm:h-fit">
			<div className="flex flex-row justify-between p-4 text-md font-small bg-gray-200 sm:m-0 sm:p-4 sm:text-xl">
				<h3>Votre commande</h3>
				<p><FaCartArrowDown /></p>
			</div>
			<div className="p-2 sm:py-0">
				<div className="p-2 sm:p-4">
					<div className="mt-2">
						<p>votre panier est vide</p>
					</div>
					<div className="flex flex-row justify-between mt-4">
						<p>Sous-total</p>
						<div className="flex flex-row items-baseline">
							<p>0</p>
							<p>&nbsp;€</p>
						</div>
					</div>
					<Divider className="my-6" />
					<div className="flex flex-row justify-between mt-4 gap-4">
						<Input
							id="code_promo"
							type="number" value=""
							placeholder="Entrez votre code promo"
							variant="bordered"
							size="sm"
							radius="none"
							className="mb-4 w-50"
						/>
						<Button
							size="sm"
							variant="bordered"
							className="border-orange-500 hover:border-black font-bold text-medium pb-0.5">
							+
						</Button>
					</div>
					<div className="flex flex-row justify-between font-bold">
						<p>TOTAL</p>
						<div className="flex flex-row items-baseline">
							<p>0</p>
							<p>&nbsp;€</p>
						</div>
					</div>
					<Divider className="my-4" />

					<RadioGroup>
						<div className="flex flex-row gap-2">
						<Radio
							value="test1">
							Take Away
						</Radio>
						<Radio
							value="test">
							Livraison
						</Radio>
						</div>
					</RadioGroup>
					<Divider className="my-4" />
					<Button
						className="flex w-full p-6 mt-3 bg-orange-500 hover:bg-gray-700 h-7 text-white"
						radius="sm">
						accéder au panier
					</Button>
				</div>
			</div>
		</aside>
	</>);
}