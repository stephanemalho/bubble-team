//REUSABLE INPUT COMPONENT
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  onChange: (e: { target: { value: string; }; }) => void;
  placeholder?: string | undefined;
}

const Input = ({onChange, value , placeholder , ...restProps  } : InputProps ) => {
  return (
    <input
    onChange={onChange}
    value={value}
    placeholder={placeholder}
    {...restProps}
    />
  )
}

export default Input