//import io5 icon
import { IoHelpBuoyOutline } from "react-icons/io5";



export default function Help(){
    return(
        <div className="bg-white h-auto p-4 sm: mt-4 flex justify-center flex-col items-center">
            <IoHelpBuoyOutline color="gray" size={70}/>
            <h3>Need Help?</h3>
            <a href="#" className=" text-green-500 font-bold text-4xl">Contact</a>
            <p>Monday to Friday</p>
            <p>9.00am - 7.30pm</p>
        </div>
    )
}