import React from 'react';
import { clsx } from 'clsx';

const Input = ({ 
  type = 'text',
  label,
  error,
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseInputStyles = 'rounded-md border border-glbGold px-3 py-2 text-glbBrown placeholder-glbBrown/60 focus:border-glbGold focus:outline-none focus:ring-2 focus:ring-glbGold shadow-sm';
  
  const inputClasses = clsx(
    baseInputStyles,
    error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : '',
    fullWidth ? 'w-full' : '',
    className
  );
  
  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {label && (
        <label className="mb-1 block text-sm font-glbSerif text-glbBrown">
          {label}
        </label>
      )}
      <input 
        type={type} 
        className={inputClasses} 
        {...props} 
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input; 