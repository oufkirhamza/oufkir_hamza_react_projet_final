import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { AlerteE } from './alertE';
import { AlerteP } from './alertP';
import { AlerteA } from '../../signUp/components/alert3';
export const ConnectProfile = () => {
    const navigate = useNavigate('')
    const [products, setProducts, data, setData, panier, setPanier] = useContext(MyContext);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [checkerIn, setCheckerIn] = useState(false)
    const [eChecker, setEchecker] = useState(false)
    const [pChecker, setPchecker] = useState(false)
    const login = () => {
        let connectUser = data.filter(element => element.email == mail)
        if (mail && password) {
            if (connectUser.length == 0) {
                setEchecker(true);
                return;
            }
            if (connectUser.password != data[0].password) {
                setPchecker(true);
                return;
            }
            setMail('');
            setPassword('');
            navigate('/');
        }
        // console.log(connectUser);
    }
    return (
        <>
            <div className='py-[72px] items-center'>
                <div className='pt-12 flex gap-4 justify-center max-[430px]:items-center max-[430px]:flex-col max-[430px]:w-[100%]'>
                <div onClick={() => { setCheckerIn(false) }} className={`${checkerIn ? 'block' : 'hidden'}`}>
                        <AlerteA />
                    </div>
                    <div className='w-[36%] h-[fit-content] py-4 border-2 flex flex-col gap-4 pl-3 max-[430px]:w-[90%]'>
                        <h1 className='text-3xl'>New Customer</h1>
                        <p className='text-slate-400'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <button className='bg-black text-white w-[fit-content] px-5 py-2' onClick={() => { navigate('/signup') }}>Continue</button>
                    </div>
                    <div className='w-[45%] py-4 border-2 flex flex-col gap-4 pl-3 max-[430px]:w-[90%]'>
                        <h1 className='text-3xl'>Retuurning Customer</h1>
                        <form className='flex flex-col gap-2' >
                            <label >Email</label>
                            <input onChange={(e) => (setMail(e.target.value))} type="email" className='px-2 w-[70%]' placeholder='Email' />
                            <div onClick={() => { setEchecker(false) }} className={`${eChecker ? 'block' : 'hidden'}`}>
                                <AlerteE />
                            </div>
                            <label >Password</label>
                            <input onChange={(e) => (setPassword(e.target.value))} type="password" className='px-2 w-[70%]' placeholder='password' />
                            <div onClick={() => { setPchecker(false) }} className={`${pChecker ? 'block' : 'hidden'}`}>
                                <AlerteP />
                            </div>
                        </form>
                        <p>Forgot your password?</p>
                        <div className='flex items-center gap-2'>
                            <button className='bg-black text-white w-[fit-content] px-5 py-2' onClick={login()}>Sign In</button>
                            <p>or <span className='hover:text-red-500 cursor-pointer' onClick={() => { navigate('/shop') }}> Return to Store </span></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
