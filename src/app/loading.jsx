import React from 'react';
import { HashLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center">
            <HashLoader color="#0094F7" size={60} speedMultiplier={1.5} />
        </div>
    );
};

export default loading;