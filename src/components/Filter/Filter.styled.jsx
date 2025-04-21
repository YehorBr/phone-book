import styled from "styled-components";

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
}
`