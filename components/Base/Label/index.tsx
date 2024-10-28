type BaseLabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {};

export function BaseLabel({ className, ...props }: BaseLabelProps) {
  return (
    <label
      className={`
        text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70
        ${className}
      `}
      {...props}
    />
  );
}
