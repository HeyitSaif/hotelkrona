import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, variant = 'light', ...props }, ref) => {
    const labelColor = variant === 'dark' ? 'text-ivory' : 'text-deep-bronze';
    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;
    
    return (
      <div className="space-y-2 w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              "block text-sm font-semibold tracking-wide uppercase text-xs",
              labelColor
            )}
          >
            {label}
            {props.required && <span className="text-gold-dark ml-1" aria-label="required">*</span>}
          </label>
        )}
        <input
          id={inputId}
          type={type}
          className={cn(
            "input-coastal w-full min-h-[48px] transition-all duration-300",
            error && "!border-burgundy focus:!ring-burgundy focus:!border-burgundy",
            variant === 'dark' && "bg-deep-bronze/50 border-gold-light/40 text-ivory placeholder:text-warm-gray",
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={errorId}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-sm text-burgundy font-semibold flex items-center gap-2" role="alert">
            <span aria-hidden="true">⚠️</span>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
