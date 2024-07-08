//Imports here
import HomeTitle from '../basic_components/homeTitle';
import WorksCard from './works-components/WorksCard'

function Works() {
    return (

        <section className="pt-7 sm:py-12 bg-gray-100">
            <div className='container mx-auto'>
                <div className='mb-12 mt-6 sm:mb-16 sm:mt-4'>
                    <HomeTitle h2="How it works" h3="Easy 4 steps to order food" />
                </div>
                <div className="flex justify-center flex-col lg:flex-row my-8 max-w-6xl mx-auto gap-4">
                    <WorksCard
                        position="1"
                        icon="map"
                        title="Search by Address"
                        description="Find all restaurants avaliable in your zone."
                    />
                    <WorksCard
                        position="2"
                        icon="store"
                        title="Choose a restaurant"
                        description="We have more than 1000s of menus online."
                    />
                    <WorksCard
                        position="3"
                        icon="payment"
                        title="Pay by card or cash"
                        description="It's quick, easy and totally secure."
                    />
                    <WorksCard
                        position="4"
                        icon="delivery"
                        title="Delivery or Takeaway"
                        description="You are lazy? Are you backing home?"
                    />
                </div>
                <div className="hidden sm:flex justify-center flex-col items-center">
                    <strong>
                        <span className="delivery-time text-center">2</span>
                        <span className="delivery-time text-center">5</span>
                    </strong>
                    <h4>Time it took to delivery</h4>
                </div>
            </div>
        </section>
    )
}

export default Works;