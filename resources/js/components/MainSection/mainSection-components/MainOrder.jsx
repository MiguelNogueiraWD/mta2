



function MainOrder(){
    return(
        <div className="text-white p-3">
            <h1 className="text-center text-xl sm:text-3xl">Place your order</h1>
            <div className="steps">
                <div className="flex flex-col justify-center items-center w-2/4">
                    <p className="">Your details</p>
                    <span className="circle">1</span>
                </div>
                <div className="flex flex-col justify-center items-center w-2/4">
                    <p className="">Payment</p>
                    <span className="circle">2</span>
                </div>
                <div className="flex flex-col justify-center items-center w-2/4">
                    <p className="">Finish</p>
                    <span className="circle">3</span>
                </div>
                <div className=" w-full mt-5 flex justify-center absolute">
                    <div className="progress-bar xl:w-8/12">
                        <span className="indicator"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainOrder;