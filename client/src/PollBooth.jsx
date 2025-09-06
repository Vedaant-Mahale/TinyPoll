import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PollBooth()
{
    const location = useLocation();
    const { name, id } = location.state || {};
    useEffect(async () => 
    {
        console.log(location.state);
        try 
        {
            result = await axios.post("https://tinypoll.onrender.com/getpolldata", { id:id });
            console.log(result);
        } 
        catch 
        {
            console.log("Error Sending Request to Server");
        }
    })
    return(
        <></>
    );
}

export default PollBooth;