// import NextUI
import { Button, Divider } from "@nextui-org/react";

export default function Command_U() {
	return (
		<div className="pb-4">
			<h2>Votre historique de commandes</h2>
			<Divider className="my-2" />
			<div className="my-4 flex flex-row justify-between">
				<div className="flex flex-col">
					<p>NOKO</p>
					<p>livré</p>
					<div className="flex flex-row">
						<div className="flex flex-row gap-x-2">
							<p>13 € 50</p>
							<p>|</p>
							<p>1 juin 2024</p>
						</div>
					</div>
				</div>
				<Button
					className="rounded-full min-w-4 font-black bg-orange-500 hover:text-white my-auto">
					&rsaquo;
				</Button>
			</div>
			<Divider className="my-2" />
			<div className="my-4 flex flex-row justify-between">
				<div className="flex flex-col">
					<p>NOKO</p>
					<p>livré</p>
					<div className="flex flex-row">
						<div className="flex flex-row gap-x-2">
							<p>13 € 50</p>
							<p>|</p>
							<p>1 juin 2024</p>
						</div>
					</div>
				</div>
				<Button
					className="rounded-full min-w-4 font-black bg-orange-500 hover:text-white my-auto">
					&rsaquo;
				</Button>
			</div>
			<Divider className="my-2" />
		</div>
	)
}