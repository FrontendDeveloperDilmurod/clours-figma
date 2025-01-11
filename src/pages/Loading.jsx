import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="flex flex-col items-center space-y-6">
                {/* Circular Gradient Spinner */}
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full animate-spin bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-500"></div>
                    <div className="absolute rounded-full inset-1"></div>
                </div>
                {/* Animated Dots Text */}
                <span>Loading...</span>
            </div>
        </div>
    );
};

export default Loading;
