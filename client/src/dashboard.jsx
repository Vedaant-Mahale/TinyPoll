import { useLocation } from 'react-router-dom';
import './App.css';

function Dashboard() {
    const location = useLocation();
    const { name, id } = location.state || {};

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center py-10">
            
            {/* Top Navigation */}
            <div className="w-11/12 md:w-3/4 flex justify-between items-center bg-white shadow-lg rounded-2xl px-6 py-4">
                
                {/* Profile Button */}
                <div 
                    className="w-32 h-32 rounded-full text-blue-700 flex justify-center items-center font-bold 
                               transition-all duration-300 cursor-pointer shadow-lg
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
                    className="w-32 h-32 rounded-full text-black flex justify-center items-center font-bold 
                               transition-all duration-300 cursor-pointer shadow-lg
                               hover:scale-105 hover:bg-gradient-to-r hover:from-gray-800 hover:to-black hover:text-white"
                >
                    SET POLL
                </div>
            </div>

            {/* Welcome Section */}
            <div className="mt-12 text-center">
                
            </div>
        </div>
    );
}

export default Dashboard;
