// import NextUI
import { Checkbox } from '@nextui-org/react';
import { useState } from 'react';

export default function TermCondition({onConditionChange}) {

	const [isChecked, setIsChecked] = useState(false);

	const checkHandler = () => {
		setIsChecked(!isChecked)
		let acceptTerm = 0;
		if(!isChecked){
			acceptTerm = 1;
		}else {
			acceptTerm = 0;
		}
		// console.log("isChecked :" + acceptTerm)
		onConditionChange(acceptTerm);
	}

	return (<>
		<Checkbox
			name='conditionUtilisation'
			radius="full"
			size='sm'
			checked={isChecked}
			onChange={checkHandler}
		>Accept terms and conditions.</Checkbox>
	</>)
}