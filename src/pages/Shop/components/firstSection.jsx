import React from 'react';
import banner from "../../../assets/img/header3.png"
export const FirstSection = () => {
    return (
        <>
            <div className='relative object-cover pt-[68px]'>
                <img src={banner} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%]'>CONTACT</h1>
            </div>
        </>
    );
};

