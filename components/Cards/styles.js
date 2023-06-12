import styled from "styled-components";

export const CardContainerStyled = styled.div`
    display: flex;
    position: relative;
    border-radius: 8px;
    width: 100%;
    height: 400px;
        max-width: 400px;

    img {
        position: relative;
        z-index: 1;
    }
`


export const TopCardContainerStyled = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    padding-top: 13.98px;
    padding-bottom: 12.79px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    z-index: 2;
    top: 1;
`




