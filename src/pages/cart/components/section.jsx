import React, { useState } from 'react';
import banner from "../../../assets/img/header1.png"
import { Table } from 'flowbite-react';
import pic from "../../../assets/img/Argentina_1994_Away_Jersey_Blue_IS0266_HM4.jpg"
import { useNavigate } from 'react-router-dom';

export const Section = (param) => {
    const [quant, setQuant]=useState(0)
    const counting =(param)=>{
        if (quant >= 0) {
            if (param == "m") {
                setQuant(quant - 1);
            }else {
                setQuant(quant + 1);
            }
        }else{
            return setQuant(0)
        }
    }
    const navigate = useNavigate("")

    return (
        <>
            <div className='pt-[68px]'>
                <div className='relative object-cover'>
                    <img src={banner}  />
                    <h1 className='absolute top-[50%] left-[50%] text-white font-bold text-5xl translate-x-[-50%] translate-y-[-50%] max-[430px]:text-2xl'>YOUR SHOPING CART</h1>
                </div>
                <div className='p-7 flex flex-col gap-3'>
                    <div className="overflow-x-auto border">
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
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium w-[20%] text-gray-900 dark:text-white className='w-[10%]'">
                                        <div className='w-[50%]'>
                                            <img src={pic} alt="" />
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell onClick={()=>{navigate("/product")}} className='cursor-pointer hover:text-red-500'>Sliver</Table.Cell>
                                    <Table.Cell>99$</Table.Cell>
                                    <Table.Cell>
                                        <div>
                                            <button onClick={()=>{counting("m")}} className='p-2 bg-slate-400 border border-stone-400 text-white w-[10%] font-bold '>-</button>
                                            <input type="number " className='w-[10%] p-2 pointer-events-none border border-stone-400' value={quant} />
                                            <button onClick={()=>{counting("a")}} className='p-2 bg-slate-400 border border-stone-400 text-white w-[10%] font-bold '>+</button>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell>299$</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                    <button className='bg-black text-white w-[fit-content] px-4 py-2 rounded-full'>PROCEED TO CHECK OUT</button>
                </div>

            </div>
        </>
    );
};

