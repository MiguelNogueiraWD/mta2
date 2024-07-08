// import react + Google Place
import { useState } from "react";
import {
    APIProvider,
    useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

//imports here
import Compteurs from "./mainSection-components/Compteurs";
import MainTitle from "./mainSection-components/MainTitle";
import MainReview from "./mainSection-components/MainReview";
import MainResults from "./mainSection-components/MainResults";
import MainOrder from "./mainSection-components/MainOrder";
import { MapHandler, SearchMap } from "../map/search";

//Import img
import profileReview from "../../assets/img/img_bg/mural-resto.jpg";
import MainMenu from "./mainSection-components/MainMenu";

//Variables placeholder


//Function Main
function Main(props) {

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [markerRef, marker] = useAdvancedMarkerRef();

    if (props.section === "title") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainTitle title={props.title} subtitle={props.subtitle} />
                <Compteurs />
            </main>
        )
    } if (props.section === "review") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainReview reviewCount={props.reviewCount} restoName={props.restoName} restoType={props.restoType} restoAdresse={props.restoAdresse} charge={props.charge} freeCharge={props.freeCharge} profileReview={props.profileReview} />
            </main>
        )
    } if (props.section === "results") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainResults resultsCount={props.resultsCount} adresse={props.adresse} />
                {/* Restaurants, people served and users counter */}
                <Compteurs />
            </main>
        )
    } if (props.section === "order") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainOrder />
            </main>
        )
    } if (props.section === "map") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <APIProvider apiKey={globalThis.GOOGLE_MAPS_API_KEY ?? import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
                    <SearchMap onPlaceSelect={setSelectedPlace} />
                    <MapHandler place={selectedPlace} marker={marker} />
                </APIProvider>
            </main>
        )
    }
    if (props.section === "menu") {
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainMenu logo={props.logo} title={props.title} subtitle={props.subtitle} adress={props.adress} info={props.info} />
            </main>
        )
    } else {
        //If we have no props just return MainTitle
        return (
            <main className="relative flex justify-end flex-col bg-gray-500 w-full min-h-96">
                <MainTitle />
                {/* Restaurants, people served and users counter */}
                <Compteurs />
            </main>
        )
    }
}

Main.defaultProps = {
    title: '(I\'m an H1 and my prop is title)',
    logo: '(je suis le logo)',
    subtitle: '(I\'m an H1 and my prop is subtitle)',
    reviewCount: '(I\'m a <p> and I\'m suposed to be a number, my prop is reviewCount)',
    restoName: '(I\'m an H3 and my prop is restoName)',
    restoType: '(I\'m a <p> and my prop is restoType)',
    restoAdresse: '(I\'m a <p> and my prop is restoAdresse)',
    charge: '(I\'m a complementary <p> and I\'m suposed to be a number, my prop is charge)',
    freeCharge: '(I\'m a complementary <p> and I\'m suposed to be a number, my prop is freeCharge)',
    resultsCount: '(I\'m an H2 and my prop is resultsCount)',
    adresse: '(I\'m an H3 and my prop is adresse)',
    profileReview: profileReview,
}

export default Main;
