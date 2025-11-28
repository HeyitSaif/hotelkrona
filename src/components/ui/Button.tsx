import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'burgundy' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:outline-[3px] focus-visible:outline-deep-bronze focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-sans disabled:transform-none active:scale-95 relative uppercase tracking-wider";

    const variants = {
      primary: "btn-primary hover:shadow-xl",
      secondary: "btn-secondary hover:shadow-md",
      outline: "btn-outline hover:shadow-md",
      burgundy: "btn-burgundy hover:shadow-xl",
      ghost: "bg-transparent text-bronze-dark hover:bg-sand-dark/30 border-none hover:text-bronze-dark"
    };

    const sizes = {
      sm: "text-xs px-5 py-2.5 rounded-lg tracking-wide min-h-[44px]",
      md: "text-sm px-6 py-3 rounded-lg tracking-wide min-h-[48px]",
      lg: "text-base px-8 py-4 rounded-lg tracking-wide min-h-[52px]"
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
