// import React
import { useState, useEffect, useRef } from "react";

// import Google Map
import {
	AdvancedMarker,
	useMap,
} from "@vis.gl/react-google-maps";
import { MarkerClusterer, Marker } from "@googlemaps/markerclusterer";

export default function MarkerRestaurant({ points }) {

	const map = useMap();
	const [markers, setMarkers] = useState({});
	const clusterer = useRef('');

	useEffect(() => {
		if (!map) return;
		if (!clusterer.current) {
			clusterer.current = new MarkerClusterer({ map });
		}
	}, [map]);

	useEffect(() => {
		clusterer.current?.clearMarkers();
		clusterer.current?.addMarkers(Object.values(markers));
	}, [markers]);

	const setMarkerRef = (marker) => {
		if (marker && markers[id])
			return;
		if (!marker && !markers[id])
			return;

		setMarkers(prev => {
			if (marker) {
				return { ...prev, [id]: marker };
			} else {
				const newMarkers = { ...prev };
				delete newMarkers[id];
				return newMarkers;
			}
		});
	};

	return (
		<>
			{points.map(i => (
				<AdvancedMarker
					position={i}
					key={i.id}
					ref={marker => setMarkerRef(marker, i.id)}>
					<span>🌳</span>
				</AdvancedMarker>
			))}
		</>
	)
}