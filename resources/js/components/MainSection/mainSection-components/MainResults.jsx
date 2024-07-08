function MainResults(props){
    return(
        <div className="relative w-full h-full py-24">
            <div className=" inset-0 p-5 flex justify-center items-center flex-col text-white">
                <h2 className="text-white text-2xl sm:text-5xl">{props.resultsCount} results in your zone</h2>
                <h3 className="text-white text-sm sm:text-xl pt-3">{props.adresse}</h3>
             </div>
        </div>

    )
}

export default MainResults;