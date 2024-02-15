import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { Alerte } from './alert';
import { AlerteP } from './alert2';
import { AlerteA } from './alert3';
import { MyContext } from '../../../utils/contextProvider';

export const SignupSection = () => {
    const [products, setProducts, data, setData] = useContext(MyContext)
    const navigate = useNavigate("")
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [mail, setEmail] = useState('');
    const [passW, setPassW] = useState('');
    let user = {
        firstName: firstName,
        secondName: secondName,
        email: mail,
        password: passW,
    }
    const [checker, setChecker] = useState(false)
    const [pchecker, setPChecker] = useState(false)
    const [checkerA, setCheckerA] = useState(false)
    const emailPattern = /\S+@\S+\.\S+/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    const [valid, setValid]=useState(false)
    const validate = () => {
        if (firstName && secondName && mail && passW) {
            if (!emailPattern.test(mail)) {
                setChecker(true)
                return;
            }
            if (!passwordPattern.test(passW)) {
                setPChecker(true)
                return;
            }
            const temp = [...data]
            temp.push(user)
            setData(temp)
            console.log(data);
            setFirstName('')
            setSecondName('')
            setEmail('')
            setPassW('') 
        } else {
            setCheckerA(true)
        }
    }
    return (
        <>
            <div className='pt-[68px] '>
                <div className='p-16 ml-10 flex flex-col gap-3'>
                <div onClick={() => { setCheckerA(false) }} className={`${checkerA ? 'block' : 'hidden'}`}>
                    <AlerteA />
                </div>
                    <h1 className='text-4xl'>Create Account</h1>
                    <p className='text-xl'>Your Personal Details</p>
                    <form className='flex flex-col gap-2' >
                        <label >First Name</label>
                        <input onChange={(e) => { setFirstName(e.target.value) }} value={firstName} type="text" className='px-2 w-[70%] outline-[#4d4d4da0]' placeholder='First Name' />
                        <label >Last Name</label>
                        <input onChange={(e) => { setSecondName(e.target.value) }} value={secondName} type="text" className='px-2 w-[70%] border-stone-500' placeholder='Last Name' />
                        <label >Email</label>
                        <input onChange={(e) => { setEmail(e.target.value) }} value={mail} type="email" className='px-2 w-[70%] border-stone-500' placeholder='Email' />
                        <div onClick={() => { setChecker(false) }} className={`${checker ? 'block' : 'hidden'}`}>
                            <Alerte />
                        </div>
                        <label >Password</label>
                        <input onChange={(e) => { setPassW(e.target.value) }} value={passW} type="password" className='px-2 w-[70%] border-stone-500' placeholder='Password' />
                        <div onClick={() => { setPChecker(false) }} className={`${pchecker ? 'block' : 'hidden'}`}>
                            <AlerteP />
                        </div>
                    </form>
                    <div className='flex items-center gap-2'>
                        <button onClick={validate} className='bg-black text-white w-[fit-content] px-5 py-2 flex items-center gap-1'><FaRegUser /> Create</button>
                        <p>or <span className='hover:text-red-500 cursor-pointer' onClick={() => { navigate('/shop') }}> Return to Store </span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

