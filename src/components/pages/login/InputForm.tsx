import  { ReactNode } from 'react';
import Input, { InputProps }  from '../../ui/Input';
import styled from 'styled-components';

interface InputFormProps extends InputProps {
  icon?: ReactNode;
  title?: string;
  name?: string;

}

const InputForm = ({ value, onChange, icon, placeholder, title, name }: InputFormProps) => {
  return (
    <InputFormStyled className="input-container">
      {icon && icon}
      <Input value={value} onChange={onChange} placeholder={placeholder} title={title} name={name} />
    </InputFormStyled>
  );
}

export default InputForm

const InputFormStyled = styled.div`
    background: rgba(252, 227, 213,0.5);
    padding: 0.5rem 0;
    width: 100%;
    .icon {
      color: rgba(0, 0, 0,0.5);
      margin-right: 1rem;
    }
    input { 
      width: 80%;
      margin: 0;
      border: none;
      border-bottom: 2px solid #755377;
      outline: none;
      color: rgba(0, 0, 0,0.5);
      font-size: 1.5rem;
      background: transparent;
      caret-color: rgb(0, 0, 0);;
      &::placeholder {
        color: rgba(0, 0, 0,0.5);;
        font-size: 1.2rem;
      }
    }
`;