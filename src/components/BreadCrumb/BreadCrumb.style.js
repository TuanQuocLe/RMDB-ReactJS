import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background: var(--medGrey);
    color: var(--white);
    
`
export const Content = styled.div `
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    a,span {
        color: var(--white);
        padding: 0 10px;
        font-size: var(--fontMed);
        font-weight: 500;
        @media screen and (max-width: 786px) {
            font-size: var(--fontSmall);
        }
    }
    a {
        text-decoration: none;
        
        }    
    }

`