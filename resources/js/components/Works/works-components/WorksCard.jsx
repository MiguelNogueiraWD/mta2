//Imports react icons
import { GrMapLocation } from "react-icons/gr";
import { BiSolidStore } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";




function WorksCard(props){

    //It render an icon depending of the prop we are reciving.
    const renderIcon = () => {
        switch (props.icon) {
            case 'map':
                return <GrMapLocation color="#ff7f00" size={70}/>;
            case 'store':
                return <BiSolidStore color="#ff7f00" size={70}/>;
            case 'payment':
                return <RiSecurePaymentFill color="#ff7f00" size={70}/>;
            case 'delivery':
                return <TbTruckDelivery color="#ff7f00" size={70}/>;
            default:
                return null;
        }
    }


    return(
        <div className="w-full h-56 sm:w-1/4 relative flex justify-center flex-col items-center border-gray-200 border-1 rounded p-5 bg-white">
            <div className="flex justify-center items-center w-8 h-8 bg-white border-gray-200 border-1 rounded-full absolute -top-4">
                <p className=" font-bold">{props.position}</p>
            </div>
            {renderIcon()}
            <h4 className=" font-bold sm:text-lg ">{props.title}</h4>
            <p className="text-xs sm:text-base">{props.description}</p>
        </div>
    )
}

export default WorksCard;