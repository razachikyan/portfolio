export interface IInputProps<T = string> {
  value: T;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  icon?: string;
  className?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}