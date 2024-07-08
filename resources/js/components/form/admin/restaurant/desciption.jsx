// import React
import React from "react"

// import NextUI
import { Input, Textarea, Button, Divider } from "@nextui-org/react"

// import Favicon
import { DESCRIPTION_R } from "../../../data/dataGeneric"
import Submit from "../../composants/submit";


export default function Description() {
	const barEditor = DESCRIPTION_R.map(i => (
		<Button
			key={i.id}
			type='button'
			radius="none"
			size="sm"
			className="bg-transparent mr-4 min-w-10">
			{i.icon}
		</Button>
	))

	const classTextArea = React.useMemo(() => (
		{
			input: ['resize-y min-h-[12em]'],
		}
	));

	const classInputFile = React.useMemo(() => (
		{
			base: ['mb-4'],
			label: ['mb-14'],
			inputWrapper: ['min-h-[6em]'],
			innerWrapper: ['my-2'],
		}
	));

	return (
		<>
			<section >
				<div>
					<div className="mb-4">
						<h3>Description du restaurant</h3>
						<p>Lorem ipsum dolor sit amet. Dolores sunt aspernatur, accusamus blanditiis suscipit, molestias molestiae eveniet voluptas sint, minima qui commodi soluta similique magnam! Odio assumenda laborum nisi ipsum.</p>
					</div>
					<div className="mb-4">
						<Input type='text' label='Nom du Restaurant' />
					</div>
					<div className="rounded-md border-2">
						<div>
							{barEditor}
						</div>
						<Textarea
							label='Description du restaurant'
							radius="none"
							classNames={classTextArea} />
					</div>
				</div>
				<Divider className="my-4" />
				<div>
					<div className="mb-4">
						<h3>Logo et photos restaurant</h3>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
					<div>
						<Input
							type="file"
							label='Télécharger le logo de votre restaurant'
							size="lg"
							classNames={classInputFile}
						/>
						<Input
							type="file"
							label='Télécharger les photos de votre restaurant'
							size="lg"
							classNames={classInputFile}
						/>
					</div>
				</div>
				<Divider className="my-4" />
				<div>
					<Submit submit="enregistrez"/>
				</div>
			</section>
		</>
	)
}