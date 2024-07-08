//Imports here
import Main from "./../components/MainSection/MainSection";
import Menu from '../components/menu/menuComponent.jsx'

export default function Order() {
    return(
        <>
            <Main section="review"/>
            <section className="bg-gray-100">
                <Menu type={1}/>
            </section>
        </>
    )
}