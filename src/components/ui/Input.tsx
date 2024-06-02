import styled from "styled-components";

export type InputProps = {
  Icon?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ Icon, ...restProps }: InputProps) => {
  return (
    <InputStyled>
      {Icon && <span className="icon">{Icon}</span>}
      <input {...restProps} />
    </InputStyled>
  )
}

export default Input

const InputStyled = styled.div`
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
      border-bottom: 2px solid #fbcbbc;
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