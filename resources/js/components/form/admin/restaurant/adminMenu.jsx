// import React
import React from "react"

// import NextUI
import { Input, Button, Divider, RadioGroup, Radio } from "@nextui-org/react"

// import Favicon
import Submit from "../../composants/submit";


export default function AdminMenu() {

	const classInputFile = React.useMemo(() => (
		{
			base: ['rounded-sm'],
			inputWrapper: ['min-h-[8em] min-w-[10em] bg-white'],
			innerWrapper: ['py-12'],
		}
	));

	const classInput = React.useMemo(() => (
		{
			base: ['rounded-sm'],
			inputWrapper: ['bg-white'],
			wrapper: ['bg-white'],
		}
	));

	return (
		<>
			<section >
				<div>
					<div className="mb-4">
						<h3>Edition des menus</h3>
						<p>Lorem ipsum dolor sit amet. Dolores sunt aspernatur, accusamus blanditiis suscipit, molestias molestiae eveniet voluptas sint, minima qui commodi soluta similique magnam! Odio assumenda laborum nisi ipsum.</p>
					</div>
					<div className="mb-4">
						<Input
							type='text'
							label='Catégorie du menu'
							placeholder="Ex: entrée"
							variant="bordered" />
					</div>
					<div className="bg-gray-200 p-2 flex flex-row justify-between rounded-lg">
						<h4 className="flex self-center">Plats 1</h4>
						<div className="">
							<Button className="rounded-full min-w-4 font-black bg-orange-500 hover:text-white">+</Button>
							<Button className="rounded-full min-w-4 font-black ml-2 bg-orange-500 hover:text-white">-</Button>
						</div>
					</div>
					<div className="flex flex-row my-4">
						<div className="size-40 mr-4">
							<Input
								type="file"
								size="lg"
								classNames={classInputFile}
								variant="bordered"
							/>
						</div>
						<div className="flex flex-col w-full gap-y-4">
							<div className="flex flex-row">
								<Input
									label='titre'
									className="mr-4 basis-3/4"
									variant="bordered" />
								<Input
									label='prix'
									className="basis-1/4"
									variant="bordered" />
							</div>
							<div>
								<Input
									label='Description'
									className="w-full"
									variant="bordered" />
							</div>
							<div>
								<h3 className="mb-2">Options</h3>
								<div className="flex flex-row gap-x-2 bg-gray-100 p-2">
									<Input
										label='titre'
										className="mr-4 basis-2/4"
										variant="bordered"
										classNames={classInput} />
									<Input
										label='prix'
										className="basis-2/4"
										variant="bordered"
										classNames={classInput} />

									<RadioGroup
										className="flex basis-1/2 my-auto"
									>
										<div className="flex flex-row gap-x-16 self-center">
											<Radio
												value="Checkbox"
												classNames={classInput}>Checkbox</Radio>
											<Radio
												value="Radio"
												classNames={classInput}>Radio</Radio>
										</div>
									</RadioGroup>
								</div>
								<div className="flex flex-row gap-x-2 p-2">
									<Input
										label='titre'
										className="mr-4 basis-2/4"
										variant="bordered"
										classNames={classInput} />
									<Input
										label='prix'
										className="basis-2/4"
										variant="bordered"
										classNames={classInput} />

									<RadioGroup
										className="flex basis-1/2 my-auto"
									>
										<div className="flex flex-row gap-x-16 self-center">
											<Radio
												value="Checkbox"
												classNames={classInput}>CheckboxAires</Radio>
											<Radio
												value="Radio"
												classNames={classInput}>Radio</Radio>
										</div>
									</RadioGroup>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Divider className="my-4" />
				<div>
					<Submit submit="enregistrez" />
				</div>
			</section>
		</>
	)
}