import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { FC } from "react";

const alertVariants = cva("w-full relative overflow-hidden rounded p-4", {
  variants: {
    variant: {
      solid: "bg-white",
      subtle: "ring-1 ring-inset ring-opacity-25",
    },
    color: {
      white: "text-gray-900 bg-white ring-1 ring-gray-200",
      red: "bg-red-500 text-white",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "white",
      class: "text-gray-900 bg-white ring-1 ring-gray-200",
    },
    {
      variant: "subtle",
      color: "red",
      class: "bg-red-50 text-red-500 ring-red-500",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "white",
  },
});

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    title: string;
    description?: string;
  };

export const BaseAlert: FC<Readonly<AlertProps>> = ({
  title,
  description,
  variant = "solid",
  color = "white",
  className,
  ...props
}) => {
  return (
    <div className={cn(alertVariants({ variant, color, className }))} {...props}>
      <p className="text-sm font-medium">{title}</p>
      {description && <p className="mt-1 text-sm leading-4 opacity-90">{description}</p>}
    </div>
  );
};
