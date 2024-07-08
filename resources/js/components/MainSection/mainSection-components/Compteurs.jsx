

const restaurantCount = 23553; 
const servedCount = 983844;
const usersCount = 120456;

function Compteurs(){
    return(
        <div id="compteurs" className="hidden w-full sm:flex justify-center items-center bg-black py-1 backdrop-blur-sm">
            <div className=" text-white px-5 flex">
                <span className="p-1 font-bold">{restaurantCount}</span>
                <p className="p-1">Restaurants</p>
            </div>
            <div className=" text-white px-5 flex">
                <span className="p-1 font-bold">{servedCount}</span>
                <p className="p-1">People Served</p>
            </div>
            <div className=" text-white px-5 flex">
                <span className="p-1 font-bold">{usersCount}</span>
                <p className="p-1">Registered Users</p>
            </div>
        </div>
    )
}

export default Compteurs;