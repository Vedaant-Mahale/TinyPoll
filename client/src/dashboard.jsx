import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Dashboard()
{
    const location = useLocation();
    const { name, id } = location.state || {};
    return (
        <div className='bg-white w-screen h-40 flex-col flex justify-center items-center overflow-auto'>
            <div className='w-full h-20 mt-40 md:mt-10 rounded-2xl flex justify-between items-center'>
                <div className='w-30 h-30 rounded-full border-4 border-blue-700 flex justify-center items-center font-bold ml-20 text-blue-700'>PROFILE</div>
                <div className="flex text-7xl">
                    <div className='text-blue-600'>Tiny</div>
                    <div>Polls</div>
                </div>
                <div className='w-30 h-30 rounded-full border-4 border-black flex justify-center items-center font-bold mr-20'>SET POLL</div>
            </div>
        </div>
    );
}

export default Dashboard