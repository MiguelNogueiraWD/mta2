// import React
import React from "react";

// import NextUI
import { Button, Divider, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";

export default function Command_R() {

	const classInput = React.useMemo(() => (
		{
			base: ['rounded-sm'],
			inputWrapper: ['bg-white'],
			wrapper: ['bg-white'],
		}
	));

	const [finish, setFinish] = useState(false);

	return (
		<div className="pb-4">
			<h2>Traitement des commandes</h2>
			<Divider className="my-2" />
			<div className="my-4 flex flex-row justify-between">
				<div className="flex flex-col gap-y-4">
					<h4>NOKO</h4>
					<div>
						<RadioGroup
							className="flex basis-1/2 my-auto"
						>
							<div className="flex flex-row gap-x-16 self-center">
								<Radio
									value="Checkbox"
									classNames={classInput}>
									en préparation
								</Radio>
								<Radio
									value="Radio"
									classNames={classInput}>
									en livraison
								</Radio>
							</div>
						</RadioGroup>
					</div>
					<div>
						{finish}<p>terminé</p>
					</div>
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
				<div className="flex flex-col gap-y-4">
					<h4>NOKO</h4>
					<div>
						<RadioGroup
							className="flex basis-1/2 my-auto"
						>
							<div className="flex flex-row gap-x-16 self-center">
								<Radio
									value="Checkbox"
									classNames={classInput}>
									en préparation
								</Radio>
								<Radio
									value="Radio"
									classNames={classInput}>
									en livraison
								</Radio>
							</div>
						</RadioGroup>
					</div>
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