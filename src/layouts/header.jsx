import React, { useContext, useState } from 'react';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from "../assets/img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import pic from "../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import { MyContext } from '../utils/contextProvider';

export const Header = () => {
    const navigate = useNavigate('')
    const [viewCart, setViewCart] = useState(false)
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext)
    let total = 0
    panier.forEach(element => {
        total = element.price + total
    });
    return (
        <div className='flex  '>
            <Navbar fluid className='shadow-lg shadow-[#00000025] py-5 w-[100%] fixed top-0 z-50'>
                <Navbar.Brand className='cursor-pointer' onClick={() => { navigate(`/`) }}>
                    <img src={logo} className="mr-3" />
                </Navbar.Brand>
                <div className="flex md:order-2 items-center gap-5">
                    <Avatar onClick={() => { navigate('/profile') }} rounded size="xs" className='border-1 cursor-pointer border-[#4a4a4a70] rounded-full' />
                    <HiOutlineShoppingBag onClick={() => { setViewCart(!viewCart) }} className=' text-2xl cursor-pointer border-l-2 w-10' />
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='duration-500'>
                    <Link className='hover:underline' to="/">Home</Link>
                    <Link className='hover:underline' to="/shop">shop</Link>
                    <Link className='hover:underline' to="/about">About</Link>
                    <Link className='hover:underline' to="/contact">Contact</Link>
                </Navbar.Collapse>
                <div className='w-[17px] absolute top-4 right-5 h-[17px] flex justify-center items-center text-white rounded-full bg-red-500 '>
                    <p>{panier.length}</p>
                </div>
                <div className={`w-[30%] p-5 bg-white fixed top-[68px] max-[430px]:w-[90%] right-0 flex flex-col shadow-lg ${viewCart ? "block" : "hidden"}`}>
                    <div className='flex flex-col gap-2 '>
                        {
                            panier.map(element =>
                                <div className='w-[95%] p-4 flex rounded-lg bg-slate-200 max-[430px]:w-[100%] gap-4'>
                                    <img width={100} src={element.image} alt="" />
                                    <div className='fle flex-col'>
                                        <h1 className='font-bold'>{element.name}</h1>
                                        <p>1 x {element.price} $</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='py-3 flex justify-between items-center px-2'>
                        <button onClick={() => { navigate('/cart') }} className='bg-black text-white w-[fit-content] px-4 py-2 rounded-full'>VIEW CART</button>
                        <p>Subtotal :{total} </p>
                    </div>
                </div>
            </Navbar>


        </div>
    );
};



