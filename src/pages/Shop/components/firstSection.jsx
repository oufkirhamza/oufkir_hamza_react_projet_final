import React, { useContext, useEffect, useState } from 'react';
import banner from "../../../assets/img/header3.png"
import lll from "../../../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';
export const FirstSection = () => {
    const [products, setProducts, data, setData] = useContext(MyContext)
    const [showedProduct, setShowedProduct] = useState([])
    useEffect(() => {
        setShowedProduct(products)
    }, [])
    const genderFilter = (param) => {
        let fltr = products.filter(element => element.gender == param)
        setShowedProduct(fltr)
    }
    const priceFilter = (a, b) => {
        let Pfltr = products.filter(element => element.price >= a && element.price < b)
        setShowedProduct(Pfltr)
    }
    const navigate = useNavigate('')
    return (
        <>
            <div className='relative object-cover pt-[68px]'>
                <img src={banner} alt="" />
                <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%]'>PRODUCTS</h1>
            </div>
            <div className='flex max-[430px]:flex-col max-[430px]:items-center'>
                <div className='w-[20%] h-[100vh] gap-6 flex flex-col mt-10 max-[430px]:w-[70%]'>
                    <div className='ml-20 flex gap-2 flex-col'>
                        <h1 className='text-xl font-bold '>Categories</h1>
                        <div className='flex gap-1 items-center '>
                            <input onClick={() => { setShowedProduct(products) }} type="radio" name='checko' />
                            <p className='text-xl'>All</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { genderFilter("men") }} id='male' type="radio" name='checko' />
                            <label for="male" className='text-xl'>Men</label>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { genderFilter("women") }} id='female' type="radio" name='checko' />
                            <label for='female' className='text-xl'>Women</label>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { genderFilter("kids") }} id='kids' type="radio" name='checko' />
                            <label for='kids' className='text-xl'>Kids</label>
                        </div>
                    </div>
                    <div className='ml-20 flex gap-2 flex-col w-[100%] '>
                        <h1 className='text-xl font-bold'>Price</h1>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { setShowedProduct(products) }} type="radio" name='check' />
                            <p className='text-xl'>All</p>
                        </div>
                        <div className='flex gap-1 items-center   '>
                            <input onClick={() => { priceFilter(0, 100) }} type="radio" name='check' />
                            <p className='text-xl '>0-100</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { priceFilter(100, 200) }} type="radio" name='check' />
                            <p className='text-xl'>100-200</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <input onClick={() => { priceFilter(200, 300) }} type="radio" name='check' />
                            <p className='text-xl'>200-300</p>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] py-10 flex gap-4 flex-wrap justify-center items-center max-[430px]:flex-col'>
                    {
                        showedProduct.map(element =>
                            <div className='w-[22%] h-[50vh] flex flex-col gap-3 relative justify-center bg-[#EBEEEF] rounded-lg p-4 max-[430px]:w-[90%]'>
                                <h1 onClick={()=>{navigate("/product")}} className='cursor-pointer text-xl font-bold hover:text-red-500'>{element.name}</h1>
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
