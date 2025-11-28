import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'dark' | 'light';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, variant = 'dark', ...props }, ref) => {
    const inputStyles = 'input-coastal';
    
    return (
      <div className="space-y-2">
        {label && (
          <label className={cn(
            "block text-sm font-medium text-dark-brown"
          )}>
            {label}
            {props.required && <span className="text-gold ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          className={cn(
            inputStyles,
            "w-full",
            error && "border-burgundy focus:ring-burgundy focus:border-burgundy",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="text-sm text-burgundy">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
