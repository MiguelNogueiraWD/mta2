// import React
import { useState } from "react";

// import Google Map
import {
	APIProvider,
	ControlPosition,
	MapControl,
	Map,
	useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

// import restaurants
import { RESTAURANTS } from '../data/restaurant_1'
import MarkerWithInfowindow from "./advancedMarker";


export default function MapLocalisation() {

	const position = { lat: 48.866667, lng: 2.333333 };
	// const [open, setOpen] = useState(false);

	return (
		<APIProvider apiKey={globalThis.GOOGLE_MAPS_API_KEY ?? import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
			<div className="top-0 right-0 bottom-0 absolute w-[35vw]">
				<div className="flex sticky h-[100vh] items-center justify-center top-0">
					<Map
						mapId={import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_ID}
						defaultCenter={position}
						defaultZoom={6}
						disableDefaultUI={true}
						gestureHandling={'greedy'}
					>
						{
							RESTAURANTS.map(i => (

								<MarkerWithInfowindow
									key={i.id}
									position={{ lng: i.longitude, lat: i.latitude }}
									raison_soc={i.raison_soc}
									site_inter={i.site_inter}
								/>
							))
						}
					</Map>
				</div>
			</div>
		</APIProvider >
	);
}