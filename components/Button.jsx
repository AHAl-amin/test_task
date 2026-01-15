import React from 'react';

const Button = ({ children, className = "", onClick, ...props }) => {
    return (
        <button
            className={`px-4 py-2 rounded-full text-white font-medium bg-linear-to-b from-[#5C8FF7] to-[#276AEE] 
                 transition-opacity flex items-center justify-center gap-2 ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
