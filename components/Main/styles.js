import styled from "styled-components";

export const MainStyled = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 16px;
    min-width: 360px;
`

export const MainTitleStyled = styled.h1`
    font-size: 32px;
    padding: 0 74px;
    text-align: center;
    margin: 64px 0;

    @media screen and (min-width: 846px) {
        font-size: 48px;
    }
`

export const BlockTextsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media screen and (min-width: 846px) {
        flex-direction: row;
        gap: 32px;

        p {
            max-width: 287px;
        }
    }

`

export const CommonTextStyled = styled.p`
    font-size: 16px;
    font-weight: 400;
    text-align: justify;
    padding: var(--padding-laterals-default);
`

export const AttentionTextStyled = styled.p`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    letter-spacing: 5%;
    line-height: 28px;
    padding: 64px 16px;
    max-width: 485px;
`

export const SecondaryTitleStyled = styled.h3`
    font-size: 32px;
    padding: 0 74px;
    text-align: center;
    margin: 0px auto 32px auto;

    @media screen and (min-width: 846px) {
        font-size: 48px;
    }
`

export const CardsContainerStyled = styled.div`
    width: 100%;
    padding: var(--padding-laterals-default);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;

    @media screen and (min-width: 1145px) {
        gap: 24px;
        max-width: 1440px;
        padding: 0;

        .small-image-container{
            min-width: 400px;
            height: 500px;
        }

        .average-image-container{
            width: 50%;
            max-width: 600px;
            height: 500px;
        }

        .big-image-container{
            width: 100%;
            max-width: 1024px;
            height: 657px;
        }
    }
`



