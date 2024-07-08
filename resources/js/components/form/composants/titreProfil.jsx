export default function TitreProfil(props) {

	const nom = props.nom;
	const profil = props.profil;
	const entreprise = props.entreprise;

	return (
		<>
			<div className="flex flex-col mx-auto pb-8">
				<h2>Votre compte {profil}</h2>
				<h3 className="flex justify-center">{nom}</h3>
				<h3 className="flex justify-center">{entreprise}</h3>
			</div>
		</>
	);
}