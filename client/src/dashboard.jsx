import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Dashboard()
{
    const location = useLocation();
    const { name, id } = location.state || {};
    return (
        <div className='bg-white w-screen h-screen flex-col flex justify-center items-center overflow-auto'>
            <div className='w-1/2 h-20 mt-40 md:mt-10 rounded-2xl flex justify-center items-center'>
                <div className="flex text-7xl">
                    <div className='text-blue-600'>Tiny</div>
                    <div>Polls</div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard