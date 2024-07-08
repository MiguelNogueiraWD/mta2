//Imports react
import { useState,useEffect } from 'react';

//Imports
import ReviewComments from './ReviewComments';

//Import Data
import {COMMENTS} from '../../data/dataComment';



export default function CommentsContainer(){

    const [items,setItems] = useState(3)

    const showMoreItems = () => {
        setItems((i) => i + 3);
    }


    const reviewItems = COMMENTS.slice(0, items).map( (i) => (
        <ReviewComments  key={i.uniqueid} 
                        user={i.user} 
                        date={i.date} 
                        comment={i.comment} 
                        fq={i.foodQuality} 
                        price={i.price} 
                        punctuality={i.punctuality} 
                        courtesy={i.courtesy}/>
    ))

    return(
        <div>

            {reviewItems}

            <div className="flex justify-center">

                <button className="m-5 border w-1/2"
                        onClick={showMoreItems}
                        
                        >Show more</button>
            </div>

        </div>
    )

}