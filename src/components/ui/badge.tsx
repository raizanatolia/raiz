import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#363D28] text-[#F2EBDD] shadow-xs hover:bg-[#222719]",
        secondary:
          "border-transparent bg-[#FAF7F2] text-[#363D28] hover:bg-[#EAE2D2]",
        destructive:
          "border-transparent bg-red-600 text-white shadow-xs hover:bg-red-700",
        outline: "text-[#363D28] border-[#363D28]/20",
        ochre: "border-[#A18347]/30 bg-[#A18347]/10 text-[#A18347]",
        glass: "border-white/40 bg-white/95 text-[#363D28] backdrop-blur-md shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
