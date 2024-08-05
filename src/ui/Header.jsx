// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
background-color: white;
padding: 1.2rem 4.8rem;
border-bottom: 1px solid grey
`;
function Header(){
    return(
        <StyledHeader>Header</StyledHeader>
    )
}

export default Header;