//Imports component
import Main from "./../components/MainSection/MainSection";
import MenuComponent from '../components/menu/menuComponent.jsx'

export default function Order() {
    // Change the following 2 values so it works with the backend.
    const adresse = "Adresse des resultats";
    const resultCount = Math.round(Math.random(4) * 100);

    return(
        <>
            <Main section="results" resultsCount={resultCount} adresse={adresse}/>
            <section className="bg-gray-100">
                <MenuComponent />
            </section>
        </>
    )
}