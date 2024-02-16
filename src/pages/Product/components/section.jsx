import React, { useContext, useState } from 'react';
import image from "../../../assets/img/Copa_Icon_Firm_Ground_Soccer_Cleats_Blue_GZ2528_HM1.jpg"
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

export const Section = () => {
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext)
    const [quant, setQuant] = useState(1)
    const counting = (param) => {
        if (quant > 0) {
            if (param == "m") {
                setQuant(quant - 1);
            } else {
                setQuant(quant + 1);
            }
        } else {
            return setQuant(1)
        }
    }
    const { id } = useParams()
    const productUse = products.filter(element => element.name == id)
    return (
        <>
            {
                productUse.map(element =>
                    <div className='pt-[68px] flex justify-center  '>
                        <div className='flex w-[100%] py-16 max-[430px]:flex-col'>
                            <div className='flex w-[80%] gap-5 justify-center '>
                                <div className='flex flex-col gap-2'>
                                    <img width={80} src={element.image} alt="" />
                                    <img width={80} src={element.image} alt="" />
                                    <img width={80} src={element.image} alt="" />
                                    <img width={80} src={element.image} alt="" />
                                </div>
                                <div className='w-[50%] max-[430px]:h-[80%]'>
                                    <img src={element.image} alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <h1 className='text-2xl'>{element.name}</h1>
                                <h1 className='text-xl font-bold'>{element.price} $</h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                                <div className=''>
                                    <button onClick={() => { counting("m") }} className='p-2 bg-slate-400 border border-stone-400 text-white w-[10%] font-bold '>-</button>
                                    <input type="number" className='w-[10%] p-2 pointer-events-none border border-stone-400' value={quant} />
                                    <button onClick={() => { counting("a") }} className='p-2 bg-slate-400 text-white border border-stone-400 w-[10%] font-bold '>+</button>
                                </div>
                                <button className='bg-black text-white w-[fit-content] px-4 py-2 rounded-full'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};
