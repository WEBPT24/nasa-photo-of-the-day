import React from 'react';
import styled from 'styled-components';

const TitleArea = styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10vh;
        width: 100%;
        background: #191919;
        margin-bottom: 5vh;
    `;
    const Title = styled.h1`
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
    `;

function TopBar () {
    return (
        <TitleArea>
        <Title>NASA Photo of the day</Title>
        </TitleArea>
    )
}

export default TopBar;

    

    