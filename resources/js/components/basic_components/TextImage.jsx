//You have two options of position firstPosition="text" or ="picture"

//You have two options of image padding styleBox="full-image" or ="no-full-image"

//You have x props more: title, text, img, alt.
//title is for the title.
//text is for the text.
//img is for the img.
//alt is for the alt property from img etiquet.


export default function TextImage(props){

    const style = props.styleBox === "no-full-image" ? "no-full-image" : "full-image";
    const bgColor = props.styleBox === "no-full-image" ? "lg:px-64" : "bg-primary-brand";

    
    if(props.firstPosition === "picture"){
        return(
        <div className={`sm:flex-row sm:min-h-[300px] ${style} ${bgColor}`}>
            <div className={`sm:w-2/4 ${style === "no-full-image" ? "p-10 sm:p-5": ""} `}>
                <picture className={`${style === "no-full-image" ? "no-full-image": ""}`}>
                    <img src={props.img} alt={props.alt} />
                </picture>
            </div>
            <article className="h-full sm:w-2/4">
                <h3 className="text-2xl font-bold pb-5">{props.title}</h3>
                <p>{props.text}</p>
            </article>
        </div>
        );
    }else if(props.firstPosition === "text"){
        return(
            <div className={`sm:flex-row sm:min-h-[300px] ${style} ${bgColor}`}>  
                <article className="sm:w-2/4">
                <h3 className="text-2xl font-bold pb-5">{props.title}</h3>
                <p>{props.text}</p>
                </article>
                <div className={`sm:w-2/4 ${style === "no-full-image" ? "p-10 sm:p-24": ""} `}>
                    <picture className={`${style === "no-full-image" ? "no-full-image": ""}`}>
                        <img src={props.img} alt={props.alt} />
                    </picture>
                </div>
            </div>
        );
    }
    
    
}
