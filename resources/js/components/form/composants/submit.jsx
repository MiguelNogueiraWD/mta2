import {Button} from "@nextui-org/react";
import { useState } from "react";

export default function Submit({onSubmitChange, submit}) {

	const [isSubmit, setIsSubmit] = useState(false);

	const handleClick=(e)=>{
		e.preventDefault();
		setIsSubmit(true);
		onSubmitChange(true);
	}

	return (
		<Button
		
			type="submit"
			value="Subscribe"
			onClick={handleClick}
			id="test"
			variant="flat"
			size="sm"
			className="items-center font-semibold mb-4 mt-2 min-w-32 bg-orange-500 hover:text-white">{submit}</Button>
	);
}