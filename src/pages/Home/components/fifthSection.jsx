import React from 'react';
import pic1 from "../../../assets/img/hammock-2239788_640.jpg"
import pic2 from "../../../assets/img/fashion-4013456_640.jpg"
import pic3 from "../../../assets/img/baby-shoes-974714_640.jpg"


export const FifthSection = () => {
    return (
        <>
            <div className='py-16 flex flex-col gap-8 '>
                <h1 className='font-bold text-2xl text-center'>OUR BLOG</h1>
                <div className='w-[100%] flex gap-5 justify-center items-center overflow-hidden max-[430px]:flex-col'>
                    <div className='w-[25%] flex  flex-col gap-2 hover:scale-105 max-[430px]:w-[90%]'>
                        <img className='' src={pic1} alt="" />
                        <h1>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='w-[25%] flex flex-col gap-2 hover:scale-105 max-[430px]:w-[90%]'>
                        <img src={pic2} alt="" />
                        <h1>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                    <div className='w-[25%] flex flex-col gap-2 hover:scale-105 max-[430px]:w-[90%]'>
                        <img src={pic3} alt="" />
                        <h1>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
                <h1 className='font-bold text-2xl text-center'>@ FOLLOW US ON INSTAGRAM</h1>
                <div className='flex gap-11 justify-center items-center py-10 max-[430px]:flex-col'>
                    <div className='border-r-2 w-[23%] text-center max-[430px]:w-[90%] max-[430px]:border-0'>
                        <h3 className='text-xl'>Free Delivery Worldwide</h3>
                        <p className='text-slate-500'>Mirum est notare quam littera gothica</p>
                    </div>
                    <div className='border-r-2 w-[25%] text-center max-[430px]:w-[90%] max-[430px]:border-l-2'>
                        <h3 className='text-xl'>30 Days Return</h3>
                        <p className='text-slate-500'>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className='text-center max-[430px]:w-[90%]'>
                        <h3 className='text-xl'>Store Opening</h3>
                        <p className='text-slate-500'>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </div>
        </>
    );
};
