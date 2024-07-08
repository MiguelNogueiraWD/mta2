// import component
import NavAdmin from "./navComponent";
import { NAVLIVREUR, NAVRESTAURANT, NAVUSER } from "../../data/dataGeneric";

export function NavU() {
	const Nav = NAVUSER.map(i =>
		<NavAdmin key={i.id} link={i.nav} />
	)

	return (<>
		<nav className="mb-1 ml-7">
			{Nav}
		</nav>
	</>)
}

export function NavR() {
	const Nav = NAVRESTAURANT.map(i =>
		<NavAdmin key={i.id} to={i.to} link={i.nav} />
	)

	return (<>
		<nav className="mb-1 ml-7">
			{Nav}
		</nav>
	</>)
}

export function NavL() {
	const Nav = NAVLIVREUR.map(i =>
		<NavAdmin key={i.id} to={i.to} link={i.nav} />
	)

	return (<>
		<nav className="mb-1 ml-7">
			{Nav}
		</nav>
	</>)
}