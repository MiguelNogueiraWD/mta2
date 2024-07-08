// import React
import { useState } from 'react';

// import NextUI
import { Divider } from "@nextui-org/react";

// import component
import Submit from '../../composants/submit';

export default function Command_L() {

	const [value, setValue] = useState({
		commande: '',
		livre: '',
	});

	const handleChange = event => {
		const { name, value } = event.target;
		setValue({ ...value, [name]: value });
	};

	return (
		<div className="pb-4">
			<h2>Vos commandes</h2>
			<Divider className="my-2" />
			<div className="my-4 justify-between">
				<div className='mb-4'>
					<h5>id commande</h5>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-row w-full">
						<div className="basis-1/2">
							<h4>Nom restaurant</h4>
							<p>adresse du restaurant</p>
							<p>Code postal</p>
							<p>ville</p>
						</div>
						<div className="basis-1/2">
							<h4>Nom client</h4>
							<p>adresse du client</p>
							<p>Code postal</p>
							<p>ville</p>
							<p>téléphone</p>
						</div>
					</div>
				</div>
				<Divider className="my-2" />
				<div className='flex flex-row'>
					<div className="basis-1/2">
						<h4>Validez la commande</h4>
						<div className='flex gap-4'>
							<Submit submit="Accepté" />
							<Submit submit="Refusé" />
						</div>
					</div>
					<div className="basis-1/2">
						<h4>Validez la livraison</h4>
						<Submit submit="livré" />
					</div>
				</div>
			</div>
			<Divider className="my-4" />
		</div>
	)
}