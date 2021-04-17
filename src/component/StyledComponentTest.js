import React from 'react';
import styled from 'styled-components';


const Title = styled.div`
    font-size : 50px;
    text-align : center;
    font-family: Georgia, serif;
    font-size: 16px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
`

const StyledComponentTest = ({number, handleClick}) => {
    return (
        <>
            <Title>HELLO</Title>
        </>
    );
}

export default StyledComponentTest;