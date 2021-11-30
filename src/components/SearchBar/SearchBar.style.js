import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    background-color: var(--darkGrey);

`
    

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 100%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    display: flex;
    justify-content: space-between;
    img{
        height: 60%;
        margin: auto 20px;
        justify-content: center;
        /* align-items: center; */


    }
    input {
        height: 70%;
        border-radius: 5px;
        width: 92%;
        margin: auto 12px auto 0;
        font-size: var(--fontBig);
        background: transparent;
        border: 0;
        outline: transparent;
        color: var(--white);
    }
`