import React, { useContext, useState } from 'react';
import "./cart.sass";
import banner from "../../../assets/img/header1.png";
import { Table } from 'flowbite-react';
import pic from "../../../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const Section = (param) => {
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext)
    const addCounting = (param) => {
        const updatedParam = { ...param, quantity: param.quantity + 1 };
        setPanier(prevPanier => prevPanier.map(item => item.id === param.id ? updatedParam : item));
    }
    const minusCounting = (param) => {
        if (param.quantity > 0) {
            const updatedParam = { ...param, quantity: param.quantity - 1 };
            setPanier(prevPanier => prevPanier.map(item => item.id === param.id ? updatedParam : item));
        }
    }
    const navigate = useNavigate("")
    let total = 0
    panier.forEach(element => {
        let stotal = element.price * element.quantity
        total += stotal
    });

    return (
        <>
            <div className='pt-[68px]'>
                <div className='relative object-cover'>
                    <img src={banner} />
                    <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%] max-[430px]:text-2xl'>YOUR SHOPING CART</h1>
                </div>
                <div className='p-7 flex flex-col gap-3'>
                    <div className="overflow-x-auto border ">
                        <Table>
                            <Table.Head>
                                <Table.HeadCell></Table.HeadCell>
                                <Table.HeadCell>Product name</Table.HeadCell>
                                <Table.HeadCell>Unit Price</Table.HeadCell>
                                <Table.HeadCell>Quantity</Table.HeadCell>
                                <Table.HeadCell>Total</Table.HeadCell>
                                {/* <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell> */}
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {
                                    panier.map(element =>

                                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium w-[20%] text-gray-900 dark:text-white className='w-[10%]'">
                                                <div className='w-[50%] '>
                                                    <img src={element.image} alt="" />
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell onClick={() => { navigate("/product") }} className='cursor-pointer hover:text-red-500'>{element.name}</Table.Cell>
                                            <Table.Cell>{element.price}</Table.Cell>
                                            <Table.Cell>
                                                <div className='qut'>
                                                    <button onClick={() => { minusCounting(element) }} className='p-2 bg-slate-400 border border-stone-400 text-white w-[10%] font-bold '>-</button>
                                                    <input type="number" className='w-[17%] text-center py-2 pointer-events-none border ' value={element.quantity} />
                                                    <button onClick={() => { addCounting(element) }} className='p-2 bg-slate-400 border border-stone-400 text-white w-[10%] font-bold '>+</button>
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell>{element.price * element.quantity}</Table.Cell>
                                        </Table.Row>
                                    )
                                }

                            </Table.Body>
                        </Table>
                    </div>
                    <div className='border flex justify-end p-2'>
                        <h1 className='text-xl font-bold'>Total : {total} $</h1>
                    </div>
                    <button className='bg-black text-white w-[fit-content] px-4 py-2 rounded-full'>PROCEED TO CHECK OUT</button>
                </div>

            </div>
        </>
    );
};

