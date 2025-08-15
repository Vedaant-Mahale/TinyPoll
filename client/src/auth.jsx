import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './App.css';

function Auth() {
    const navigate = useNavigate();
    const [RegUser, setRegUser] = useState("");
    const [RegPass, setRegPass] = useState("");
    const [LogUser, setLogUser] = useState("");
    const [LogPass, setLogPass] = useState("");
    const port = 3000;

    const onRegister = async () => {
        try {
            await axios.post("https://tinypoll.onrender.com/register", { name: RegUser, password: RegPass });
            alert("User Added");
        } catch {
            console.log("Error Sending Request to Server");
        }
    };

    const onLogin = async () => {
        try {
            const result = await axios.post("https://tinypoll.onrender.com/login", { name: LogUser, password: LogPass });
            console.log(result);
            alert("Login Successful");
            navigate('/dash', { state: { name: LogUser, id: result.data.userid } });
        } catch {
            console.log("Error Sending Request to Server");
        }
    };

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white w-screen min-h-screen flex flex-col items-center py-10">
            
            {/* Logo */}
            <div className="flex text-7xl font-extrabold mb-16 shadow-lg bg-white px-6 py-4 rounded-2xl">
                <span className="text-blue-600 drop-shadow-md">Tiny</span>
                <span className="text-gray-800">Polls</span>
            </div>

            {/* Forms Container */}
            <div className="w-full md:w-3/4 flex flex-col md:flex-row md:justify-around items-center gap-10">
                
                {/* Register Box */}
                <div className="w-80 md:w-96 bg-white shadow-lg rounded-2xl flex flex-col items-center p-8">
                    <h2 className="text-3xl font-bold text-blue-700 mb-8">Register</h2>
                    <input 
                        className="p-3 border-2 border-blue-700 rounded-full w-full mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Username" 
                        type="text" 
                        onChange={(e) => setRegUser(e.target.value)} 
                    />
                    <input 
                        className="p-3 border-2 border-blue-700 rounded-full w-full mb-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password" 
                        type="password" 
                        onChange={(e) => setRegPass(e.target.value)} 
                    />
                    <button 
                        className="w-full rounded-full bg-blue-700 text-white py-3 font-bold hover:bg-blue-800 transition duration-300 cursor-pointer shadow-lg
                               hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white"
                        onClick={onRegister}
                    >
                        REGISTER
                    </button>
                </div>

                {/* Login Box */}
                <div className="w-80 md:w-96 bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 ">
                    <h2 className="text-3xl font-bold text-black mb-8">Login</h2>
                    <input 
                        className="p-3 border-2 border-black rounded-full w-full mb-5 focus:outline-none focus:ring-2 focus:ring-black "
                        placeholder="Username" 
                        type="text" 
                        onChange={(e) => setLogUser(e.target.value)} 
                    />
                    <input 
                        className="p-3 border-2 border-black rounded-full w-full mb-8 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Password" 
                        type="password" 
                        onChange={(e) => setLogPass(e.target.value)} 
                    />
                    <button 
                        className="w-full rounded-full bg-black text-white py-3 font-bold hover:bg-gray-900 transition duration-300 cursor-pointer shadow-lg
                               hover:scale-105 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white"
                        onClick={onLogin}
                    >
                        LOGIN
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Auth;
