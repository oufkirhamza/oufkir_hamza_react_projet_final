import { Tabs } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import kodas from '../../../assets/img/ID9329_22_model.jpg'
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const ThirdSection = () => {
    const [fltProduct, setFltProduct] = useState([])
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext)
    const newPan = [...panier]
    const addToPanier = (param)=>{
        let check = panier.find
        if (!newPan.includes(param)) {
            newPan.push(param)
        }
        setPanier(newPan)
        param.quantity += 1
    }
    useEffect(()=>{
        setBtnNew(true);
        setBtnOld(false);
        const newP = products.filter((element) => element.state == "new")
        newP.sort(() => Math.random() - 0.5);
        let newA = [newP[0], newP[1], newP[2], newP[3]]
        setFltProduct(newA)
    },[])
    const newProduct = () => {
        setBtnNew(true);
        setBtnOld(false);
        const newP = products.filter((element) => element.state == "new")
        newP.sort(() => Math.random() - 0.5);
        let newA = [newP[0], newP[1], newP[2], newP[3]]
        setFltProduct(newA)
    }
    const oldProduct = () => {
        setBtnNew(false);
        setBtnOld(true);
        const oldP = products.filter((element) => element.state == "old")
        oldP.sort(() => Math.random() - 0.5);
        let oldA = [oldP[0], oldP[1], oldP[2], oldP[3]]
        setFltProduct(oldA)
    }
    const [btnNew, setBtnNew] = useState(true)
    const [btnOld, setBtnOld] = useState(false)
    const navigate = useNavigate('')
    return (
        <div className='flex flex-col gap-2 border-b-2'>
            <div className='w-[100%] flex gap-4 border-b-2 justify-center'>
                <button onClick={newProduct} className={`border cursor-pointer rounded-t-lg px-3 py-1 border-b-0 ${btnNew ? "bg-red-700 text-white" : ""}`}>NEW</button>
                <button onClick={oldProduct} className={`border cursor-pointer rounded-t-lg px-3 py-1 border-b-0 ${btnOld ? "bg-red-700 text-white" : ""}`}>OLD</button>
            </div>
            <div className='w-[100%] py-10  justify-center items-center flex gap-4 max-[430px]:flex-col'>
                {
                    fltProduct.map(element =>
                        <div className='w-[22%] h-[60vh] flex flex-col gap-3 relative justify-center bg-[#EBEEEF] rounded-lg p-4 max-[430px]:w-[80%]'>
                            <h1 onClick={()=>{navigate(`/product/${element.name}`)}} className='text-xl font-bold hover:text-red-500 cursor-pointer'>{element.name}</h1>
                            <img src={element.image} className='bg-[#505050f3]' />
                            <div className='flex  justify-between'>
                                <p className='text-xl font-bold'>{element.price} $</p>
                                <button onClick={()=>{addToPanier(element)}} className='px-3 py-1 mb-7 bg-black text-white rounded-full'>ADD TO CART</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};
