import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
export const ConnectProfile = () => {
    const navigate = useNavigate('')
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext);
    const [mail, setEmail] = useState('');
    const [passW, setPassW] = useState('');

    return (
        <>
            <div className='py-[72px] items-center'>
                <div className='pt-12 flex gap-4 justify-center max-[430px]:items-center max-[430px]:flex-col max-[430px]:w-[100%]'>
                    <div className='w-[36%] h-[fit-content] py-4 border-2 flex flex-col gap-4 pl-3 max-[430px]:w-[90%]'>
                        <h1 className='text-3xl'>New Customer</h1>
                        <p className='text-slate-400'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <button className='bg-black text-white w-[fit-content] px-5 py-2' onClick={()=>{navigate('/signup')}}>Continue</button>
                    </div>
                    <div className='w-[45%] py-4 border-2 flex flex-col gap-4 pl-3 max-[430px]:w-[90%]'>
                        <h1 className='text-3xl'>Retuurning Customer</h1>
                        <form className='flex flex-col gap-2' >
                            <label >Email</label>
                            <input onChange={(e)=>(setEmail(e.target.value))} type="email" className='px-2 w-[70%]' placeholder='Email' />
                            <label >Password</label>
                            <input onChange={(e)=>(setPassW(e.target.value))} type="password" className='px-2 w-[70%]' placeholder='password' />
                        </form>
                        <p>Forgot your password?</p>
                        <div className='flex items-center gap-2'>
                            <button className='bg-black text-white w-[fit-content] px-5 py-2'>Sign In</button>
                            <p>or <span className='hover:text-red-500 cursor-pointer' onClick={() => { navigate('/shop') }}> Return to Store </span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
