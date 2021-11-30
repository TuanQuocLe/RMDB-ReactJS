import styled from "styled-components";

export const Wrapper = styled.div `
    background: var(--darkGrey);
    min-height: 100px;
    display: flex;
`
export const Content = styled.div `
    width: 100%;
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
    justify-content: space-between;

    div {
        background: var(--medGrey);
        border-radius: 20px;
        padding: 10px 20px;
        margin: 20px;
        p{
            margin: 0;
            text-align: center;
        }

    }

    @media screen and (max-width: 768px) {
        display: block;
        div {
            margin: 20px 80px;
            padding:10px
        }
    }
`