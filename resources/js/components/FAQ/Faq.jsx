//Imports here
import FaqAccordion from "./faq-components/FaqAccordion";
import FaqTest from "./faq-components/FaqTest";


//Pour que le composant fonctionne, différents noms doivent être utilisés dans la propriété category.

//Utilisez les noms suivants pour afficher les listes: [payments, comment, livraison, emporter, precommande, inscription, trafication, confidentialite]. 
//N'oubliez pas de ne pas utiliser d'accents ou de caractères spéciaux ni de majuscule.

// ¡¡¡¡¡¡¡¡¡¡¡¡Attention!!!!!!!!!!!!
//SVP Mettez à jour la liste des noms ci-dessus s'ils sont ajoutés à l'avenir, merci


function Faq(){
    return(
        <div className="sm:w-3/4 m-auto">
            <FaqAccordion />
        </div>
    )
}

export default Faq;