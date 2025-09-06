import { useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Poll from './poll';
import './App.css';

function Dashboard() {
    const location = useLocation();
    const { name, id } = location.state || {};
    const [searchQuery,setSearchQuery] = useState("");
    const [result, setResult] = useState([])
    const search = async () =>
    {
        try {
        const tempresult = await axios.post(
            "https://tinypoll.onrender.com/getpoll",
            { query: searchQuery }
        );
        setResult(tempresult.data)
        } catch (error) {
        console.log("An error happened", error);
        }
    }
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center py-10">
            
            {/* Top Navigation */}
            <div className="w-11/12 md:w-3/4 h-28  flex justify-between items-center bg-white shadow-lg rounded-2xl px-6 py-4">
                
                {/* Profile Button */}
                <div 
                    className="w-32 h-16 rounded-full text-blue-700 flex justify-center items-center font-bold 
                               transition-all duration-300 cursor-pointer border-2 border-blue-700
                               hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white"
                >
                    PROFILE
                </div>
                
                {/* Logo */}
                <div className="flex items-center space-x-1 text-6xl font-extrabold">
                    <span className="text-blue-600 drop-shadow-md">Tiny</span>
                    <span className="text-gray-800">Polls</span>
                </div>

                {/* Set Poll Button */}
                <div 
                    className="w-32 h-16 rounded-full text-black flex justify-center items-center font-bold 
                               transition-all duration-300 cursor-pointer border-2 border-black
                               hover:scale-105 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white"
                >
                    SET POLL
                </div>
            </div>
            <div className='w-11/12 md:w-3/4 h-12 bg-white mt-10 rounded-full shadow-lg flex justify-between'>
                <input className='h-10 p-2 w-1/2 rounded-full ml-1 mt-1 border-1 border-black' onChange={(e) => {setSearchQuery(e.target.value)}}></input>
                <div className='h-10 p-2 w-30 text-blue-700 mr-1 mt-1 font-bold rounded-full flex items-center justify-center
                transition-all duration-300 cursor-pointer border-2 border-blue-700
                               hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white' onClick={search}>Search</div>
            </div>
            {/* Welcome Section */}
            <div className="w-11/12 mt-12 flex grid-cols-4 space-x-15">
            
                {result.map((poll,key) => (
                    <Poll
                    key={key}
                    pollID={poll.id}
                    name={poll.poll_name}
                    owner={poll.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
