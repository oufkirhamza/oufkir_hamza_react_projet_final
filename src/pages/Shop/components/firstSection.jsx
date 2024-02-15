import React from 'react';
import banner from "../../../assets/img/header3.png"
import lll from "../../../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
export const FirstSection = () => {
    return (
        <>
            <div className='relative object-cover pt-[68px]'>
                <img src={banner} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>PRODUCTS</h1>
            </div>
            <div className='flex '>
                <div className='w-[20%] h-[100vh] gap-6 bg-purple-500 flex flex-col'>
                    <div className='ml-20 flex gap-2 flex-col'>
                        <h1 className='text-xl font-bold '>Categories</h1>
                        <p className='text-xl'>All</p>
                        <p className='text-xl'>Men</p>
                        <p className='text-xl'>Women</p>
                    </div>
                    <div className='ml-20 flex gap-2 flex-col'>
                        <h1 className='text-xl font-bold'>Price</h1>
                        <p className='text-xl'>All</p>
                        <p className='text-xl'>0-100</p>
                        <p className='text-xl'>100-200</p>
                        <p className='text-xl'>200-300</p>
                    </div>
                </div>

                <div className='w-[80%] py-10 flex gap-4 bg-pink-500'>
                    <div className='w-[22%] h-[50vh] flex flex-col gap-3 relative justify-center bg-[#EBEEEF] rounded-lg p-4'>
                        <h1 className='text-xl font-bold'>ADIDAS</h1>
                        <img src={lll} className='bg-[#505050f3]' />
                        <div className='flex  justify-between'>
                            <p className='text-xl font-bold'>200 $</p>
                            <button className='px-3 py-1 mb-7 bg-black text-white rounded-full'>ADD TO CART</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

