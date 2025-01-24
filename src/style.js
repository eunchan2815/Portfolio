import styled, { keyframes } from "styled-components";

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    background: url('/assets/background.png') no-repeat center;
    width: 100%;
    height: 100vh;    
    background-size: cover;
`

export const ImagesWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 
                0 2px 4px rgba(0, 0, 0, 0.05), 
                0 4px 8px rgba(0, 0, 0, 0.05), 
                0 8px 16px rgba(0, 0, 0, 0.05), 
                0 16px 32px rgba(0, 0, 0, 0.05), 
                0 32px 64px rgba(0, 0, 0, 0.05);
    padding: 1.4rem;
    border-radius: 24px;
    gap: 10px;
    display: flex;
    margin-bottom: 3%;
`

export const Images = styled.img`
    width: 74px;
    height: 74px;
    border-radius: 15px;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.1);
    }
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin-top: auto;
    justify-content: space-between;
`

export const Text = styled.div`
    margin-top: 18%;
    font-size: 40px;
    @font-face {
        font-family: 'ROEHOE-CHAN';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/ROEHOE-CHAN.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
`