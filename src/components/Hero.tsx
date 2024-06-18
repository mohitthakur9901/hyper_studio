
import { GoArrowUpRight } from "react-icons/go";

function Hero() {
    return (
        <div className="min-h-full min-w-full flex flex-col lg:flex-row  bg-gray-100 rounded-2xl font-mono">
            <div className="flex flex-col justify-center items-center m-5 lg:w-1/2">
                <img

                    src="/src/assets/photo3.jpg"
                    alt="photo"
                    className="h-48 w-full md:h-96 rounded-2xl object-cover"
                />
                <div className="hero_link h-64 w-full rounded-2xl mt-2 font-bold flex flex-col justify-center items-center py-10">
                    <button className="mt-4 py-1.5 w-32 bg-white rounded-2xl flex justify-center items-center gap-2 text-black">
                        View More <GoArrowUpRight />
                    </button>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center lg:w-1/2   ">
                <div className=" w-full rounded-2xl px-4 text-center lg:text-left">
                    <h1 className="text-4xl md:text-8xl py-5 font-serif">
                        Welcome to our website <br /> hello to our website <br /> website
                    </h1>
                    <button className="py-1.5 w-32 bg-white rounded-2xl flex justify-center items-center gap-2 text-black mx-auto lg:mx-0">
                        View More <GoArrowUpRight />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Hero