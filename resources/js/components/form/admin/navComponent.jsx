// import React
import { Button } from "@nextui-org/react";

export default function NavAdmin({ link, key }) {
	return (
		<>
			<Button
				key={key}
				className='p-3 mx-1 bg-white hover:text-orange-500'>
				{link}
			</Button>
		</>
	)
}