//Imports NextUI
import {User} from "@nextui-org/react";

function ProfilMobile(){

   
    return(
        <a href="#home">
             <User
                className="cursor-pointer" 
                name="Jane Doe"
                description="User"
                avatarProps={{ src: "https://i.pravatar.cc/150?u=a04258114e29026702d"}}
    />
        </a>
    )
}

export default ProfilMobile;