import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'burgundy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold focus:ring-offset-cream disabled:opacity-50 disabled:cursor-not-allowed font-sans";

    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      outline: "btn-outline",
      burgundy: "btn-burgundy",
      ghost: "bg-transparent text-bronze hover:bg-sand/50 border-none"
    };

    const sizes = {
      sm: "text-xs px-4 py-2 rounded-md tracking-wide",
      md: "text-sm px-6 py-3 rounded-lg tracking-wide",
      lg: "text-base px-8 py-4 rounded-lg tracking-wide"
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
