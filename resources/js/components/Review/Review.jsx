//Imports here
import CommentsContainer from "./review-components/CommentsContainer";
import Stars from "./review-components/Stars";

//Imports images
import IMG from "../../assets/img/img_bg/mural-resto.jpg";



export default function Review(){

    //Place holder de la decription du restaurant
    const aboutUs = "Je suis un placeholder de la description de l'about us.";

    //Changer pour une operation de moiyéne.
    const reviewCount = 5;


    return(
        <div className="m-2 sm:m-10 border-1 border-slate-200 xl:w-1/2">

            <div className="p-3 bg-primary-brand border-b-1 border-slate-100">
                <h3 className="text-white">Description</h3>
            </div>
            <div className="m-5">
                <img className="m-auto" src={IMG} alt="Image restaurant" />
                <h4 className=" font-bold text-2xl mt-3">About us</h4>
                <p>{aboutUs}</p>
            </div>
            <div className="m-5">
                <div className="flex">
                    <h4 className="pr-2 font-bold text-lg">{reviewCount} Reviews</h4>
                    <div className="flex items-center">
                        <Stars stars={4} />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row">

                        <div id="block1" className=" sm:w-2/4">
                            <div className="flex">
                                <p className="pr-2 sm:text-lg">Food Quality</p>
                                <div className="flex items-center">
                                    <Stars stars={4} />
                                </div>
                            </div>
                            <div className="flex">
                                <p className="pr-2 sm:text-lg">Price</p>
                                <div className="flex items-center">
                                    <Stars stars={3} />
                                </div>
                            </div>
                        </div>

                        <div id="block2" className=" sm:w-2/4">
                            <div className="flex">
                                <p className="pr-2 sm:text-lg">Punctuality</p>
                                <div className="flex items-center">
                                    <Stars stars={4} />
                                </div>
                            </div>
                            <div className="flex">
                                <p className="pr-2 sm:text-lg">Courtesy</p>
                                <div className="flex items-center">
                                    <Stars stars={2} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="pt-5 mt-5 border-t-1">
                        <button className="bg-primary-brand text-white p-3">LEAVE A REVIEW</button>
                    </div>
                    <CommentsContainer/>
                </div>
            </div>
        </div>
    )
}