import React from 'react';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from "../assets/img/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineShoppingBag } from "react-icons/hi2";

export const Header = () => {

    return (
        <>
            <Navbar fluid rounded className='shadow-lg shadow-[#00000025] py-5 '>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={logo} className="mr-3" alt="Flowbite React Logo" />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                </Navbar.Brand>
                <div className="flex md:order-2 items-center gap-5">
                <Avatar rounded size="xs" className='border-1 border-[#4a4a4a70] rounded-full' />
                <HiOutlineShoppingBag className='text-2xl border-l-2 w-10' />
                    {/* <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                        }
                    > */}
                        {/* <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header> */}
                        {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item> */}
                    {/* </Dropdown> */}
                    <Navbar.Toggle />
                    
                </div>
                <Navbar.Collapse className='transition duration-75 '>
                    <Link to="/">Home</Link>
                    <Link to="/shop">shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Navbar.Collapse>
            </Navbar>

        </>
    );
};



