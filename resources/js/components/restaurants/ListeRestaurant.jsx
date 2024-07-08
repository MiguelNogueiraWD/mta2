//Import react hook
import { useState } from 'react';

//Imports here
import RestaurantCardSearch from './restaurant-components/restaurantCardList';

//Imports icons
import { IoMapOutline } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { HiQueueList } from "react-icons/hi2";

export default function ListeRestaurant() {

    const [gridType, setGridType] = useState("w-full");

    const gridClick = () => {
        setGridType((g) => g === 'size-auto' ? 'w-full' : 'size-auto');
    };

    return (
        <div className='basis-3/4'>
            <div className='w-full bg-white rounded border p-2 flex justify-between'>
                <div>
                    <button className='px-2 border-2 sm:hidden'>Filter</button>
                </div>
                <div className='flex justify-end'>
                    <button className='px-2 border-l-1'
                        onClick={'map'}
                    ><IoMapOutline size={20} />
                    </button>
                    <button className='px-2 border-l-1'
                        onClick={gridClick}
                    >{gridType === 'size-auto' ? <HiQueueList size={20} /> : <BsFillGridFill size={20} />}
                    </button>
                </div>
            </div>
            <RestaurantCardSearch type={gridType} />
        </div>
    )
}