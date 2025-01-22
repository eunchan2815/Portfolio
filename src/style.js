import styled from "styled-components";

export const Images = styled.img`
    width: 74px;
    height: 74px;
    border-radius: 15px;
`

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    background: url('/assets/background.png')no-repeat center;
    width: 100%;
    height: 100vh;    
    background-size: cover;
`

export const ImagesWrapper = styled.div`
    gap: 10px;
    display: flex;
    margin-bottom: 100px;
`