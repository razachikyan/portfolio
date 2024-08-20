export interface IInputProps {
    type?: string;
    value: string | number;
    onChange: () => void;
    disabled?: boolean;
}