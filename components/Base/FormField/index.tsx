type BaseFormFieldProps = React.HTMLAttributes<HTMLDivElement> & {
  error?: string;
};

export function BaseFormField({ className, error, children, ...props }: BaseFormFieldProps) {
  return (
    <div className={className} {...props}>
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
