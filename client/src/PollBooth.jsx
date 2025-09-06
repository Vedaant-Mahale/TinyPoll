import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function PollBooth()
{
    const location = useLocation();
    const { name, id } = location.state || {};
    useEffect(() => {
    const fetchData = async () => 
    {
        try {
            const result = await axios.post(
                "https://tinypoll.onrender.com/getpolldata",
                { id } 
            );
            console.log("Server response:", result.data);
        } 
        catch (err) 
        {
            console.error("Error Sending Request to Server:", err.response?.data || err.message);
        }
    };

    if (id !== undefined && id !== null) fetchData();
    }, [id, location.state]);

    return(
        <></>
    );
}

export default PollBooth;