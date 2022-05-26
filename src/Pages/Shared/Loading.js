import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <progress className="progress text-lime-300 w-56"></progress>
        </div>
    );
};

export default Loading;