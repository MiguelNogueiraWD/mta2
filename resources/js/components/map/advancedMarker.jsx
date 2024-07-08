// import React
import { useState } from 'react';

// import Google Place
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';

export default function MarkerWithInfowindow({ position, raison_soc, site_inter }) {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={position}
        title={'AdvancedMarker that opens an Infowindow when clicked.'}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={400}
          onCloseClick={() => setInfowindowOpen(false)}>
          <div>
            <h2 className="text-[20px] font-medium">{raison_soc}</h2>
            <p>{site_inter}</p>
            <svg
              className="absolute text-white h-10 w-full left-0 top-full"
              x="0px"
              y="0px"
              viewBox="0 0 455 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current shadow-lg"
                points="0,0 255,255 255,0"
              />
            </svg>
          </div>
        </InfoWindow>
      )}
    </>
  );
};