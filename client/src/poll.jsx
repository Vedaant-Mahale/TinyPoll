import e from "cors";
import React from "react";

function Poll({pollID,name,owner})
{
    return(
        <>
            <div className="bg-white p-5 w-full h-20 shadow-lg rounded-2xl flex items-center justify-between float-left">
                {/* Left side */}
                <div className="flex flex-col justify-center">
                    <span className="text-lg font-semibold text-gray-800">{name}</span>
                    <span className="text-sm text-gray-500">Owner: {owner}</span>
                </div>

                {/* Right side (button) */}
                <div
                    className="w-24 h-10 flex items-center justify-center ml-10 p-2 text-blue-600
                            transition-all duration-300 cursor-pointer shadow-lg 
                            rounded-full font-bold
                            hover:scale-105 hover:bg-gradient-to-r 
                            hover:from-blue-600 hover:to-blue-800 hover:text-white"
                >
                    ENTER
                </div>
            </div>

        </>
    )
}

export default Poll;