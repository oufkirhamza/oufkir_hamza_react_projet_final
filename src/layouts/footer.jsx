import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


export const FooterSection = () => {
    return (
        <>
            <Footer container>
                <div className="w-full">
                    <div className="w-full flex p-5  sm:flex gap-10 md:flex md:grid-cols-1">
                        <div className='w-[36%] flex flex-col gap-4'>
                            {/* <Footer.Brand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="Flowbite"
                            /> */}
                            <h1 className='font-medium text-xl'>Getting Started</h1>
                            <p className=''>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                            <div className="mt-4 flex items-start space-x-6 ">
                                <Footer.Icon href="#" icon={BsFacebook} />
                                <Footer.Icon href="#" icon={BsInstagram} />
                                <Footer.Icon href="#" icon={BsTwitter} />
                                <Footer.Icon href="#" icon={BsGithub} />
                                <Footer.Icon href="#" icon={BsDribbble} />
                            </div>
                        </div>
                        <div className="flex gap-10 w-[60%] ">
                            <div >
                                <Footer.Title title="categories" className='font-bold text-black' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Men</Footer.Link>
                                    <Footer.Link href="#">Women</Footer.Link>
                                    <Footer.Link href="#">Dress</Footer.Link>
                                    <Footer.Link href="#">Sunglasses</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Links" className='font-bold text-black' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Search</Footer.Link>
                                    <Footer.Link href="#">About Us</Footer.Link>
                                    <Footer.Link href="#">Contact Us</Footer.Link>
                                    <Footer.Link href="#">Returns</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="HELP" className='font-bold text-black' />
                                <Footer.LinkGroup col>
                                    <Footer.Link href="#">Track Order</Footer.Link>
                                    <Footer.Link href="#">Returns</Footer.Link>
                                    <Footer.Link href="#">Shipping</Footer.Link>
                                    <Footer.Link href="#">FAQs</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div className='flex flex-col gap-2 w-[40%]'>
                                <Footer.Title title="NEWSLETTER" className='font-bold text-black' />
                                <input type="text" placeholder='Email Address' className='border-0 border-b outline-none focus:outline-none focus:border-b-red-600' />
                                <button className='bg-black text-white py-3 w-[fit-content] px-6 rounded-full'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright href="#" by="Copyright" year={2022} />

                    </div>
                </div>
            </Footer>

        </>
    );
};




