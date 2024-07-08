//Imports component
import Main from "../components/MainSection/MainSection.jsx";
import Order from "../components/menu/carte/order.jsx";
import TableMenu from "../components/menu/carte/tableMenu.jsx";
import MenuNav from "../components/menu/filter/menuNav.jsx";

export default function PageMenu() {

    return (
        <>
            <Main section="menu" logo={`totlogo`} title={`toto`} subtitle={`chinois`} adress={`135 bd paris`} info={`delivery`} />
            <section className="bg-gray-100">

                <div className="flex flex-col sm:flex-row w-4/5 gap-x-6 mx-auto bg-gray-100 py-8 px-4">
                    <MenuNav />
                    <TableMenu />
                    <Order />
                </div>

            </section>
        </>
    )
}