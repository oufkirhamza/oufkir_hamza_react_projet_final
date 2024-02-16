import React, { useState } from 'react';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from "../assets/img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import pic from "../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"

export const Header = () => {
    const navigate = useNavigate('')
    const [viewCart, setViewCart]=useState(false)
    return (
        <div className='flex  '>
            <Navbar fluid className='shadow-lg shadow-[#00000025] py-5 w-[100%] fixed top-0 z-50'>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3" />
                </Navbar.Brand>
                <div className="flex md:order-2 items-center gap-5">
                    <Avatar onClick={() => { navigate('/profile') }} rounded size="xs" className='border-1 cursor-pointer border-[#4a4a4a70] rounded-full' />
                    <HiOutlineShoppingBag onClick={() => { setViewCart(!viewCart) }} className='text-2xl cursor-pointer border-l-2 w-10' />
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className='transition duration-75'>
                    <Link className='hover:underline' to="/">Home</Link>
                    <Link className='hover:underline' to="/shop">shop</Link>
                    <Link className='hover:underline' to="/about">About</Link>
                    <Link className='hover:underline' to="/contact">Contact</Link>
                </Navbar.Collapse>
                <div className={`w-[30%] p-5 bg-white fixed top-[68px] right-0 flex flex-col shadow-lg ${viewCart ? "block" : "hidden" }`}>
                    <div className='flex flex-col gap-2 '>
                        <div className='w-[95%] p-4 flex rounded-lg bg-slate-200 gap-4'>
                            <img width={100} src={pic} alt="" />
                            <div className='fle flex-col'>
                                <h1 className='font-bold'>ADIDAS</h1>
                                <p>4 x 40 $</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-3 flex justify-between items-center px-2'>
                        <button onClick={()=>{navigate('/cart')}} className='bg-black text-white w-[fit-content] px-4 py-2 rounded-full'>VIEW CART</button>
                        <p>Subtotal : $60.00</p>
                    </div>
                </div>
            </Navbar>


        </div>
    );
};



