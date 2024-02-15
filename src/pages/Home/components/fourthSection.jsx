import React, { useContext } from 'react';
import pic from "../../../assets/img/camilla-carvalho-Cgb4gMKRcMA-unsplash.jpg"
import { MyContext } from '../../../utils/contextProvider';
import lll from "../../../assets/img/Copa_Icon_Firm_Ground_Soccer_Cleats_Blue_GZ2528_HM1.jpg"
export const FourthSection = () => {
    const [products, setProducts] = useContext(MyContext)
    const pics = [...products]
    pics.sort(() => Math.random() - 0.5);

    return (
        <>
            <div className='flex p-7 gap-4'>
                <div className='w-[50%]'>
                    <div className='w-[100%] relative overflow-hidden transition-all delay-1000'>
                        <img src={pic} className='hover:scale-105' />
                        <div className='absolute top-16 text-center ml-5 w-[40%]'>
                            <h1 className='text-8xl text-white font-bold '>all in</h1>
                            <h1 className='text-8xl text-white font-bold '>or</h1>
                            <h1 className='text-8xl text-white font-bold '>nothing</h1>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex flex-col items-center gap-3 p-7 bg-[#EBEEEF]'>
                    {
                            <div className='w-[50%]  '>
                                <img src={pics[0].image} alt="" />
                                <div className='flex justify-between text-xl font-bold'>
                                    <h1>{pics[0].name}</h1>
                                    <h1>{pics[0].price} $</h1>
                                </div>
                            </div>
                    }
                    <div className='flex gap-7'>
                        <div className='flex flex-col justify-center items-center w-[40px] h-[40px] border-2 border-[#636363] p-6 '>
                            <h1 className='font-bold'>-20</h1>
                            <h1>Days</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[40px] h-[40px] border-2 border-[#636363] p-6 '>
                            <h1 className='font-bold'>-120</h1>
                            <h1>Hours</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[40px] h-[40px] border-2 border-[#636363] p-6 '>
                            <h1 className='font-bold'>-10</h1>
                            <h1>mins</h1>
                        </div>
                        <div className='flex flex-col justify-center items-center w-[40px] h-[40px] border-2 border-[#636363] p-6 '>
                            <h1 className='font-bold'>-50</h1>
                            <h1>secs</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

