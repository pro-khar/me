import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  " inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-?? [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-black border-[3px] bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "border-black border-[3px] bg-destructive text-destructive-foreground font-bold hover:bg-destructive/90",
        outline:
          "border-white text-white border-[3px] bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border-black border-[3px] bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:border-black hover:border-[3px] hover:bg-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 px-8 py-6 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0)] transition-all duration-300",
        sm: "h-9 rounded-md px-3 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300 text-sm",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 p-6 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
