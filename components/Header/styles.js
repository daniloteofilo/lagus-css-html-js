import styled from "styled-components";

export const HeaderBackgroundStyled = styled.header`
    background-color: var(--background-header-bar);
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--padding-laterals-default);
    height: 58px;
    max-width: 1024px;
    
    img {
        cursor: pointer;
    }

    @media screen and (min-width: 1056px) {
        padding: 0;
    }

    @media screen and (min-width: 851px) {
        justify-content: space-between;
        align-items: center;
    }
`

export const ButtonsLeftSideHeaderContainerStyled = styled.div`

    @media screen and (min-width: 851px) {
        display: block;
        .nav-toggle-button {
            display: none;
        }
    }
`

export const ButtonStyled = styled.button`
    display: none;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 4px 25px;
    background-color: transparent;
    width: 158px;
    font-size: 16px;
    font-weight: 400;
    transition: 0.1s;
    cursor: pointer;
    &:hover {
        color: #070707;
        background-color: white;
    }

    @media screen and (min-width: 851px) {
        display: block;
    }
`

export const LogoText = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    
    span {
        color: #FE5050;
    }
`
export const PersonCartIconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`