import { LoaderCircle } from "lucide-react";
import { Fragment } from "react";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  loading?: boolean;
};

export function BaseButton({
  className,
  asChild = false,
  loading = false,
  children,
  ...props
}: Readonly<BaseButtonProps>) {
  const Component = asChild ? Fragment : "button";

  return (
    <Component
      className={`
        inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50
        bg-primary text-white hover:bg-primary/90
        px-4 py-2 gap-x-1.5
        ${className}
      `}
      {...props}
    >
      {loading && <LoaderCircle className="animate-spin size-5" />}
      {children}
    </Component>
  );
}
