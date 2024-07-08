//Imports 
import profileReview from "../../../assets/img/img_bg/mural-resto.jpg";


function MainReview(props){
    return(
        <div className="flex justify-center items-center flex-col p-5 text-white mb-5">
            <div className="w-24 h-24 border-2 border-primary-brand">
                <img className="w-full h-full object-cover object-center"  src={props.profileReview} alt="profile_picture" />
            </div>
            <p>(<a className=" text-yellow-200">Read {props.reviewCount} reviews</a>)</p>
            <h3 className="text-3xl">{props.restoName}</h3>
            <p className="text-sm italic">{props.restoType}</p>
            <p>{props.restoAdresse}</p>
            <p className=" text-xs">Delivery charge: {props.charge}€, free over {props.freeCharge}€</p>
        </div>
    )
};

MainReview.propsDefault = {
    profileReview: profileReview,
}

export default MainReview;