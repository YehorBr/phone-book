import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    gap: 20px;
    padding: 0;
    margin-top: 45px;
`


export  const Contact = styled.li`
    width: 380px;

    flex: 0 0 calc((100% - 20px) / 2 - 32px);

    background-color: #E1F0DC;
    
    padding: 16px;

    border-radius: 16px;
`

export const DelButton = styled.button`
    color: #375a37;
    background-color: #f14e4e;

    font-size: 14px;

    border: none;
    border-radius: 10px;

    padding: 7px 25px;
    &:hover{
        background-color: #DC143C;
    }
`

export const Text = styled.p`
    color: #2f4f2f;
    font-size: 16px;
`