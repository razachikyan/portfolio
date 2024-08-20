export interface IInputProps<T = string> {
    value: T;
    onChange: () => void;
    disabled?: boolean;
    icon?: string;
}