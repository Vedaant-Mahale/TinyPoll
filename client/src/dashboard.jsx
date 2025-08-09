import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css'

function Dashboard()
{
    const location = useLocation();
    const { name, id } = location.state || {};
    return (
        <div>
        <p>Name: {name}</p>
        <p>ID: {id}</p>
        </div>
    );
}

export default Dashboard