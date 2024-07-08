//Imports icons
import { FaStar, FaRegStar } from "react-icons/fa";



export default function Stars(props){

    const howManyStars = props.stars;
    const howManyVoidStars = 5 - props.stars;

    //Render all the stars needed.
    const starsCount = () => {

        //Array of stars to return.
        let stars = [];

        //for each star render a star icon.
        for(let i = 0; i < howManyStars; i++){

            stars.push(<FaStar className="text-yellow-400" key={i} />);
                   
            }
        
        return stars;

    //Render the void stars if needed.
    }

    const voidStarsCount = () => {
        
        //Array of void stars to return.
        let voidStars = [];

        //For each void star render a void star icon.
        for(let i = 0; i < howManyVoidStars; i++){

            voidStars.push(<FaRegStar className="text-gray-400" key={i}/>)

        }
        
        return voidStars

    }


    return(
        <div className="flex items-center">
            {starsCount()}
            {voidStarsCount()}
        </div>
    )
}