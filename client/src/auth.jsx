import { useState } from 'react'
import axios from 'axios';
import './App.css'

function Auth()
{
    const [RegUser,setRegUser] = useState("");
    const [RegPass,setRegPass] = useState("");  
    const [LogUser,setLogUser] = useState("");
    const [LogPass,setLogPass] = useState("");
    const port = process.env.PORT || 3000;
    const onRegister = async () => 
    {
        try
        {
            await axios.post("https://tinypoll.onrender.com/register",{name:RegUser,password:RegPass})
            alert("User Added")
        }
        catch
        {
            console.log("Error Sending Request to Server")
        }
    }
    const onLogin = async () =>
    {
        try
        {
            const result = await axios.post("https://tinypoll.onrender.com/login",{name:LogUser,password:LogPass})
            console.log(result)
            alert("Login Successful")
        }
        catch
        {
            console.log("Error Sending Request to Server")
        }
    }
    return(

        <>
            <div className='bg-white w-screen h-screen flex-col flex justify-center items-center overflow-auto'>
                <div className='w-1/2 h-20 rounded-2xl m-auto mt-10 flex justify-center items-center'>
                <div className="flex text-7xl">
                    <div className='text-blue-600'>Tiny</div>
                    <div>Polls</div>
                </div>
                </div>
                <div className='w-3/4 h-full mt-20 flex flex-col md:flex-row justify-around'>
                    <div className='w-120 h-130 border-blue-700 border-4 rounded-2xl flex flex-col items-center'>
                        <div className='text-4xl text-blue-700 ml-auto mr-auto mt-10'>
                            Register
                        </div>
                        <div className='mt-32 w-full flex flex-col items-center'>
                            <input className='b-2 p-2 border-2 rounded-full border-blue-700 w-3/4' placeholder='Username' type="text" onChange={(e) => {setRegUser(e.target.value)}}></input>
                            <input className='m-5 b-2 border-2 p-2 rounded-full border-blue-700 w-3/4' placeholder='Password' type="text" onChange={(e) => {setRegPass(e.target.value)}}></input>
                        </div>
                        <div className='mt-20 w-full flex flex-col items-center'>
                            <div className='w-1/2 cursor-pointer rounded-full bg-blue-700 h-10 text-white flex justify-center items-center p-2' onClick={onRegister}>REGISTER</div>
                        </div>
                    </div>
                    <div className='w-120 h-130 border-black border-4 rounded-2xl flex flex-col items-center'>
                        <div className='text-4xl text-black ml-auto mr-auto mt-10'>
                            Login
                        </div>
                        <div className='mt-32 w-full flex flex-col items-center'>
                            <input className='b-2 p-2 border-2 rounded-full border-black w-3/4' placeholder='Username' type="text" onChange={(e) => {setLogUser(e.target.value)}}></input>
                            <input className='m-5 b-2 border-2 p-2 rounded-full border-black w-3/4' placeholder='Password' type="text" onChange={(e) => {setLogPass(e.target.value)}}></input>
                        </div>
                        <div className='mt-20 w-full flex flex-col items-center'>
                            <div className='w-1/2 cursor-pointer rounded-full bg-black h-10 text-white flex justify-center items-center p-2' onClick={onLogin}>LOGIN</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth