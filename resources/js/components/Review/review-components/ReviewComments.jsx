//Import NextUI
import {User} from "@nextui-org/user";

//Imports here
import Stars from "./Stars";



export default function ReviewComents(props){

    return(
        <div className="mt-10">
            <div>
                <div className="flex justify-between">
                    <div>
                        <User
                            name={props.user}

                            // The avatar need to change to profile img from the user.
                            
                            avatarProps={{
                            src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                            }}/>
                    </div>
                    <div>
                        <p>
                            {props.date}
                        </p>
                    </div>
                </div>
            </div>
            <p>{props.comment}</p>
            <div className="mt-3 flex flex-col sm:flex-row">

                <div id="block1" className=" sm:w-2/4">
                    <div className="flex">
                        <p className="pr-2 sm:text-lg">Food Quality</p>
                        <div className="flex items-center">
                            <Stars stars={props.fq} />
                        </div>
                    </div>
                    <div className="flex">
                        <p className="pr-2 sm:text-lg">Price</p>
                        <div className="flex items-center">
                            <Stars stars={props.price} />
                        </div>
                    </div>
                </div>

                <div id="block2" className=" sm:w-2/4">
                    <div className="flex">
                        <p className="pr-2 sm:text-lg">Punctuality</p>
                        <div className="flex items-center">
                            <Stars stars={props.punctuality} />
                        </div>
                    </div>
                    <div className="flex">
                        <p className="pr-2 sm:text-lg">Courtesy</p>
                        <div className="flex items-center">
                            <Stars stars={props.courtesy} />
                        </div>
                    </div>

                </div>       
            </div>
        </div>
    )
}