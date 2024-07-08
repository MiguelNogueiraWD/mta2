// import useLibrary Google Place and React
import {
	useMap,
	useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useState, useEffect, useRef } from 'react';

// import component
import Submit from "../form/composants/submit";

export function MapHandler({ place, marker }) {
	const map = useMap();

	useEffect(() => {
		if (!map || !place || !marker) return;

		if (place.geometry?.viewport) {
			map.fitBounds(place.geometry?.viewport);
		}

		marker.position = place.geometry?.location;
	}, [map, place, marker]);
	return null;
};

export function SearchMap({ onPlaceSelect }) {

	const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
	const inputRef = useRef(null);
	const places = useMapsLibrary('places');

	useEffect(() => {
		if (!places || !inputRef.current) return;

		const options = {
			fields: ['geometry', 'name', 'formatted_address']
		};

		setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
	}, [places]);

	useEffect(() => {
		if (!placeAutocomplete) return;

		placeAutocomplete.addListener('place_changed', () => {
			onPlaceSelect(placeAutocomplete.getPlace());
		});
	}, [onPlaceSelect, placeAutocomplete]);

	return (
		<>
			<div className="m-auto flex flex-row items-center">
				<input ref={inputRef} />
				{/* <Submit submit='recherchez' /> */}
			</div>
			{/* <div className="m-auto flex flex-row items-center">
				<Input
					className=""
					placeholder='Entrez une localisation' />
			</div> */}
		</>
	)
}