import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    return (
      <Comp
        className={cn(
          'cursor-pointer inline-flex items-center justify-center rounded font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest',
          {
            'bg-amber-600 text-white hover:bg-bg-amber-700 focus-visible:ring-amber-600':
              variant === 'primary',
            'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500':
              variant === 'secondary',
            'border border-gray-400 bg-transparent text-gray-900 hover:border-black/80 hover:bg-black/80 hover:text-foreground focus-visible:ring-gray-400':
              variant === 'outline',
            'hover:bg-gray-100 text-gray-900 focus-visible:ring-gray-500':
              variant === 'ghost',
            'h-9 px-4 text-[10px]': size === 'sm',
            'h-11 px-6 text-xs': size === 'md',
            'h-14 px-10 text-sm': size === 'lg',
          },
          className 
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
export default Button;

