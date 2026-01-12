import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md",
        outline: "border-2 border-border bg-background hover:bg-accent hover:text-accent-foreground hover:border-primary/30",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero variants
        hero: "px-8 py-4 rounded-full font-bold text-base bg-gradient-to-r from-secondary via-gold-light to-secondary text-[hsl(var(--polines-blue-dark))] shadow-gold hover:shadow-xl hover:scale-105 hover:brightness-105",
        heroOutline: "px-8 py-4 rounded-full font-bold text-base border-2 border-white/70 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white",
        // Brand variants
        gold: "bg-gradient-to-r from-secondary to-gold-light text-[hsl(var(--polines-blue-dark))] font-bold shadow-sm hover:shadow-gold hover:scale-[1.02] hover:brightness-105",
        blue: "bg-gradient-to-r from-primary to-polines-blue-light text-primary-foreground font-bold shadow-sm hover:shadow-blue hover:scale-[1.02]",
        // Special variants
        glass: "bg-white/20 backdrop-blur-xl border border-white/30 text-foreground hover:bg-white/30 hover:border-white/50",
        subtle: "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary",
        success: "bg-success text-success-foreground shadow-sm hover:bg-success/90 hover:shadow-md",
        // CTA variant
        cta: "px-8 py-4 rounded-full bg-gradient-to-r from-secondary via-gold-light to-secondary text-[hsl(var(--polines-blue-dark))] font-bold shadow-gold hover:scale-105 animate-pulse-subtle",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10 rounded-xl",
        "icon-sm": "h-8 w-8 rounded-lg",
        "icon-lg": "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
