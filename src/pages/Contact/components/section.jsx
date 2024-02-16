import React, { useContext } from 'react';

import banner from "../../../assets/img/header1.png"
import { MyContext } from '../../../utils/contextProvider';

export const Section = () => {
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext)

    return (
        <>
            <div className='w-[100%] pt-[68px]'>
                <div className='relative object-cover'>
                    <img src={banner} alt="" />
                    <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%] max-[430px]:text-2xl'>CONTACT</h1>
                </div>
                <div className='flex py-9 w-[100%] gap-10 items-center justify-center max-[430px]:flex-col max-[430px]:px-0'>
                    <div className='w-[fit-content] max-[430px]:w-[90%] bg-pink-400'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1017897.8926849058!2d-7.276687689548292!3d33.0685291506176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1707911469233!5m2!1sfr!2sma" className='w-[600px] h-[520px] max-[430px]:w-[100%] max-[430px]:h-[20vh]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-[40%] max-[430px]:w-[90%]'>
                        <h1 className='text-2xl'>Send us your message</h1>
                        <div className='flex flex-col gap-2 p-4 '>
                            <form className='flex flex-col gap-3'>
                                <input type="text" placeholder='Name' className='p-2 w-[100%]' />
                                <input type="email" placeholder='Email' className='p-2 w-[100%]' />
                                <input type="number" placeholder='Phone' className='p-2 w-[100%]' />
                                <textarea name="" placeholder='Message' cols="30" rows="10" className='w-[100%]'></textarea>
                            </form>
                            <button className='bg-black text-white py-2 px-8 w-[fit-content] rounded-full'>SEND</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

