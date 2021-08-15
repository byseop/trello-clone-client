type ButtonPropTypes = {
  className?: string;
  children?: React.ReactChild | null;
  leftIcon?: React.ReactNode | null;
  rightIcon?: React.ReactNode | null;
} & React.HTMLProps<HTMLButtonElement>;

export default function Button({
  className,
  children,
  leftIcon,
  rightIcon,
  type = 'button',
  ...props
}: ButtonPropTypes) {
  return (
    <button
      className={`${className}`}
      type={type as 'button' | 'submit' | 'reset' | undefined}
      {...props}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
