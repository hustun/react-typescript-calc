// Declaring type of props - see "Typing Component Props" for more examples
type InputProps = {
  id: string;
  name: string;
  type: string;
  onChange?: React.ChangeEventHandler;
  value: any;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}; /* use `interface` if exporting so that consumers can extend */

// you can choose annotate the return type so an error is raised if you accidentally return some other type
const Input = ({
  id,
  name,
  type,
  placeholder,
  className,
  onChange,
  value,
  disabled,
}: InputProps): JSX.Element => {
  return (
    <input
      className={`w-24 h-8 px-2 rounded bg-transparent border ${className}`}
      type={type}
      name={name}
      id={id}
      onChange={onChange}
      value={value}
      disabled={disabled ? disabled : false}
      placeholder={placeholder ? placeholder : ''}
    />
  );
};

export default Input;
