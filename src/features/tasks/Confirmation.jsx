/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Button from "../../ui/Button";
import styled from 'styled-components';
import Row from '../../ui/Row';
const StyledContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  height: 100%;
`;
function Confirmation({onCancel, onConfirm}){
    return(
        <Container>
        <h4>Are you sure you want to mark this task as done?</h4>
    <Row type="horizontal">
    <StyledContainer>
      <Button variation="secondary" onClick={onCancel}>Cancel</Button>
      <Button onClick={onConfirm}>Mark as Done</Button>
    </StyledContainer>
    </Row>
        </Container>
    )
}

export default Confirmation;