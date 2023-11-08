import React from 'react'
import styled from 'styled-components';

import logo from "../Assets/Icon SOS.png";

const StyledHeader = styled.div`
height 8vh;
background-color: #003C98;
padding: 0 54px;
display: flex;
justify-content: space-between;
align-items: center;

`;

export const Header = () => {
    return <StyledHeader>
        <div className="logo-container">
           <img src={logo} altt = "logo" />
        </div>
        <nav>
            <ul>
            <li>Contact</li>
            <li>Purpose</li>
            <li>RIDE SAFE</li>
            </ul>
         </nav>


    </StyledHeader>;
};
