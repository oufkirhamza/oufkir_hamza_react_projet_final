import React from 'react';
import img1 from "../../../assets/img/adida_banner1.jpg"
import img2 from "../../../assets/img/pexels-keith-wako-89910.jpg"
import img3 from "../../../assets/img/alex-_AOL4_fDQ3M-unsplash.jpg"
import img4 from "../../../assets/img/pexels-sebastiaan-stam-1480686.jpg"
import img5 from "../../../assets/img/pexels-chris-wölfer-1561010.jpg"
import img6 from "../../../assets/img/randy-rooibaatjie-el5tvhXcpAw-unsplash.jpg"


export const SeconSection = () => {
    return (
        <>
            <div className='py-20 w-[100%] flex gap-2 flex-wrap justify-center px-30'>
                <div className='w-[25%] flex flex-col gap-2'>
                        <div className=' overflow-hidden h-[64vh]' >
                            <img className='hover:scale-110 ' src={img1} />
                        </div>
                        <div className=' overflow-hidden ' >
                            <img className='hover:scale-110' src={img4} />
                        </div>
                </div>
                <div className='w-[25%] flex flex-col gap-2'>
                        <div className=' h-[fit-content] overflow-hidden bg-red-100' >
                            <img className='hover:scale-110' src={img2} />
                        </div>
                        <div className=' overflow-hidden ' >
                            <img className='hover:scale-110' src={img5} />
                        </div>
                </div>
                <div className='w-[25%] flex flex-col gap-2'>
                        <div className=' overflow-hidden ' >
                            <img className='hover:scale-110' src={img3} />
                        </div>
                        <div className=' overflow-hidden ' >
                            <img className='hover:scale-110' src={img6} />  
                        </div>
                </div>

            </div >
        </>
    );
};

