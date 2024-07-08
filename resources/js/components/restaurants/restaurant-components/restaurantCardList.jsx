// import NextUI
import { Card, CardBody } from "@nextui-org/react";
import { RESTAURANTS } from "../../data/restaurant_1";

//This code is to get the current time to know if the restaurant is open or not.
const now = new Date();
let currentHour = now.getHours();

currentHour = currentHour < 10 ? "0" + currentHour : currentHour;

//Component
export default function RestaurantCardSearch(props) {

    const cardRestaurant = RESTAURANTS.map((i) => {

        //Is this card popular? If it is put the badge popular.
        const isPopular = i.popular ? 'popular' : '';
        const isPopular_2 = i.popular ? 'popular_bis' : '';

        //Is the restaurant open?
        const isOpen = () => {


            //If the restaurant dosen't have any free time beetween the open and close time than do this... else do that...
            if (i.time2 && i.time3 === "none") {

                //If the current time is beetween the open time the text color green if it's close then red.
                const open = (i.time1 <= currentHour && i.time4 >= currentHour) ? 'text-green-500' : 'text-red-500';

                return (
                    <p className={`text-sm mb-3 ${open}`} >Ouvert de {`${i.time1}h à ${i.time4}h`}</p>
                );
            } else {

                //If current time is between the two open time then the text color is green else red.
                const open = ((currentHour >= i.time1
                    && currentHour <= i.time2)
                    || (currentHour >= i.time3
                        && currentHour <= i.time4)) ? 'text-green-500' : 'text-red-500';

                return (
                    <p className={`text-sm mb-3 ${open}`} >Ouvert de {`${i.time1}h à ${i.time2}h et de ${i.time3}h à ${i.time4}h`}</p>
                );
            }
        }

        //Is the restaurant closing soon?
        const isClosingSoon = () => {
            if ((i.time2 > currentHour && i.time2 <= currentHour + 1) ||
                (i.time4 > currentHour && i.time4 <= currentHour + 1)) {

                console.log('closing soon')

                return (
                    <p className={`text-sm mb-3 text-primary-brand font-bold`} >Closing soon!</p>
                )
            } else {
                return null;
            }
        }

        if (props.type === 'w-full') {
            return (
                <Card key={i.id}
                    className={`${props.type} hover:scale-[102%] hover:bg-gray-50`}
                    shadow="sm"
                    radius="none">
                    <div className={isPopular}></div>
                    <CardBody>
                        <div className="flex justify-between">
                            <div className="flex">

                                <img className="size-40 object-cover object-center" src={i.img} />

                                <div className="mx-2 sm:mx-4">
                                    <h3 className="text-orange-400 text-lg sm:text-2xl">{i.raison_soc}</h3>
                                    <p className="text-xs italic">{i.subTitle}</p>
                                    <p className="text-sm mt-2 sm:mt-4">{i.adress}</p>
                                    {isOpen()}
                                    {isClosingSoon()}
                                    <ul className="flex flex-row text-sm">
                                        <li className="list-image-check ml-7 mr-5"><span>{i.status1}</span></li>
                                        <li className="list-image-nocheck ml-5"><span>{i.status2}</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="bg-primary-brand text-white p-3 rounded">
                                    View menu
                                </button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )
        } else {
            return (
                <Card key={i.id}
                    className={`${props.type} px-12 py-2`}
                    shadow="sm"
                    radius="none">
                    <div className={isPopular_2}></div>
                    <CardBody>
                        <div className="flex flex-col mx-auto ">
                            <div className="flex flex-col justify-items-center">
                                <img className="sm:w-full sm:h-44 object-center" src={i.img} />
                                <div className="text-center">
                                    <h3 className="text-orange-400 text-lg sm:text-2xl ">{i.raison_soc}</h3>
                                    <p className="text-xs italic">{i.subTitle}</p>
                                    <p className="text-sm mt-2 sm:mt-4">{i.adress}</p>
                                    {isOpen()}
                                    {isClosingSoon()}
                                    <ul className="flex flex-row text-sm justify-center">
                                        <li className="list-image-check ml-7 mr-5"><span>{i.status1}</span></li>
                                        <li className="list-image-nocheck ml-5"><span>{i.status2}</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="flex justify-center mt-2">
                                <button className="bg-primary-brand text-white p-3 rounded">
                                    View menu
                                </button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            )
        }
    });

    return (
        <section className='flex flex-row flex-wrap justify-center my-5 gap-4'>
            {cardRestaurant}
        </section>
    );
}

// Tailwind Backup for section flex flex-row flex-wrap justify-center my-10 container mx-auto gap-6