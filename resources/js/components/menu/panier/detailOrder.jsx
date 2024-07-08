// import NextUI
import { Input, Textarea, Divider } from '@nextui-org/react';

export default function DetailCommande() {
	return (<>
		<section className="mb-4 sm:max-w-screen-md mx-auto sm:mb-6">
			<h2
				className="p-3 m-4 text-md font-medium text-white bg-orange-500 mb-3 sm:m-0 sm:p-4 sm:text-xl">
				Détails de votre commande
			</h2>
			<div className='flex flex-col px-8 pt-3 sm:p-8 font-bold gap-y-4 sm:gap-y-6'>
				<Input
					isRequired
					name="nom"
					label="Nom" id="nom"
					type="text" value=""
					placeholder="nom"
					variant="flat"
					size="sm"
					 />
				<Input
					isRequired
					name="prenom"
					label="Prénom" id="prenom"
					type="text" value=""
					placeholder="prénom"
					variant="flat"
					size="sm"
					 />
				<Input
					isRequired
					name="mail"
					label="Email" id="mail"
					type="mail" value=""
					placeholder="email"
					variant="flat"
					size="sm"
					 />
				<Input
					isRequired
					name="adress"
					label="Adresse" id="adress"
					type="text" value=""
					placeholder="Adresse complète"
					variant="flat"
					size="sm"
					 />
				<Divider />
				<Textarea
					label="Description"
					placeholder="Ex: Code Interphone, étage..."
					className="max-w-screen-md" />
			</div>
		</section>
	</>);
}