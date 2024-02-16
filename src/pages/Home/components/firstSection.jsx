
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/contextProvider';

import imgCa1 from "../../../assets/img/slider.jpg"
import imgCa2 from "../../../assets/img/slider1.jpg"
import imgCa3 from "../../../assets/img/slider3.jpg"
import { Carousel } from 'flowbite-react';


export const FirstSection = () => {
    const images = [imgCa1, imgCa2, imgCa3]
    return (
        <div className='pt-[68px]'>
            <div className="xl:h-80 2xl:h-[60vh] ">
                <Carousel className='rounded-none' indicators={false} slideInterval={5000}>
                    {
                        images.map(element =>
                            <div className="relative overflow-hidden ">
                                <img className='rounded-none' src={element} alt="..." />
                                <div className="absolute text-center text-white top-[50%] items-center left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4">
                                    <h1 className="text-2xl max-[430px]:text-2xl">New collection </h1>
                                    <h1 className="text-6xl font-bold max-[430px]:text-3xl">NEW ARRIVALS </h1>
                                    <button className="bg-white px-5 py-2 w-[fit-content] text-black rounded-full max-[430px]:px-3 ">SHOP NOW</button>
                                </div>
                            </div>
                        )
                    }
                </Carousel>
            </div>

        </div>
    );
}
