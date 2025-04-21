import styled from "styled-components";

export const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    width: 500px;

    padding: 10px;
`

export const Button = styled.button`
    display: block;

    font-size: 14px;

    color: #213721;
    background-color: #64b029;

    border: none;
    border-radius: 10px;

    padding: 7px 25px;

    &:hover{
        background-color: #4E8C1D;
    }

`

export const Label = styled.label`
    color: #2f4f2f;

    font-size: 16px;
`

export const Input = styled.input`
    color: #2f4f2f;
    background-color:  #e3f0dc;

    font-size: 14px;

    border: 1px solid #aad08f;
    border-radius: 10px;

    padding: 6px;
    margin-left: 5px;

    &:focus {
  outline: none;
  box-shadow: 0 0 5px #aad08f;
  border-color: #aad08f;
}`