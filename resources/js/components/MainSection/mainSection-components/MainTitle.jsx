//Imports here
import muralResto from "../../../assets/img/img_bg/mural-resto.jpg";

function MainTitle(props) {
    return (
        <div className="w-full h-full">
            <div className="absolute w-full h-full inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${muralResto})`, filter: 'blur(4px)' }}>
            </div>

            <div className="relative flex items-center flex-col my-32 sm:my-24 text-white">
                <h1 className="text-white text-5xl">{props.title}</h1>
                <h3 className="text-white text-xl">{props.subtitle}</h3>
            </div>
        </div>

    )
}

export default MainTitle;