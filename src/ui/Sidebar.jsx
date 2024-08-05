// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Row from './Row'
import MainNav from './MainNav';
const StyledSidebar = styled.aside`
background-color: white;
padding: 3.2rem 2.4rem;
border-right: 1px solid grey;
grid-row: 1/-1;
color: var(--color-brand-500);
`;
function Sidebar(){
    return(
        <StyledSidebar>
            <Row>
            <Logo/>
            <MainNav/>
            </Row>
            </StyledSidebar>
    )
}

export default Sidebar;