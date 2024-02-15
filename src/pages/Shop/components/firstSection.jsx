import React, { useContext, useState } from 'react';
import banner from "../../../assets/img/header3.png"
import lll from "../../../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import { MyContext } from '../../../utils/contextProvider';
export const FirstSection = () => {
    const [products, setProducts] = useContext(MyContext)

    return (
        <>
            <div className='relative object-cover pt-[68px]'>
                <img src={banner} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>PRODUCTS</h1>
            </div>
            <div className='flex '>
                <div className='w-[20%] h-[100vh] gap-6 flex flex-col mt-10'>
                    <div className='ml-20 flex gap-2 flex-col'>
                        <h1 className='text-xl font-bold '>Categories</h1>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='checko' checked />
                            <p className='text-xl'>All</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='checko' />
                            <p className='text-xl'>Men</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='checko' />
                            <p className='text-xl'>Women</p>
                        </div>
                    </div>
                    <div className='ml-20 flex gap-2 flex-col'>
                        <h1 className='text-xl font-bold'>Price</h1>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='check' checked />
                            <p className='text-xl'>All</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='check' />
                            <p className='text-xl'>0-100</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='check' />
                            <p className='text-xl'>100-200</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input type="radio" name='check' />
                            <p className='text-xl'>200-300</p>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] py-10 flex gap-4 flex-wrap justify-center'>
                    {
                        products.map(element =>
                            <div className='w-[22%] h-[50vh] flex flex-col gap-3 relative justify-center bg-[#EBEEEF] rounded-lg p-4'>
                                <h1 className='text-xl font-bold'>{element.name}</h1>
                                <img src={element.image} className='bg-[#505050f3]' />
                                <div className='flex  justify-between'>
                                    <p className='text-xl font-bold'>{element.price} $</p>
                                    <button className='px-3 py-1 mb-7 bg-black text-white rounded-full'>ADD TO CART</button>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </>
    );
};
