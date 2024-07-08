export function FormFile({ id, label, name, onChange }) {

	return (<>

		<label class="bg-gray-100 rounded-md text-small content-center px-3 pb-1 h-[4em]">
			<span class="text-xs">{label}</span>
			<input
				id={id}
				type="file"
				name={name}
				className="file:mr-3 file:text-xs file:rounded-full file:border-0 file:bg-gray-200 file:px-3 file:mt-1 text-slate-400"
				onChange={onChange}
				required
			/>
		</label>

	</>);
}

export function DropZone({ id, label, name, onChange }) {

	return (<>
		<div className="bg-gray-100 min-h-[8em] flex justify-center text-center border-dashed border-[0.2em] py-2 mb-4">
			<label class="rounded-md text-small content-center mt-2 flex justify-center flex-col">
				<span class="text-xs">{label}</span>
				<input
					id={id}
					type="file"
					name={name}
					className="file:mt-2 file:text-xs file:flex file:content-center file:min-w-full file:min-h-[6em] file:justify-self-center file:rounded-full file:border-0 file:bg-gray-200 text-transparent"
					onChange={onChange}
					required
				/>
			</label>
		</div>

	</>);
}