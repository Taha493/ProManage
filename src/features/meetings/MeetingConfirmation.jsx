/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../../ui/Button';
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

function findtext(text) {
  if (text === 'postpone') return 'Postpone';
  if (text === 'complete') return 'Complete';
  if (text === 'cancel') return 'Cancel';
  return text; // default return in case the text doesn't match any condition
}

function MeetingConfirmation({ onCancel, onConfirm, text }) {
  return (
    <Container>
      <h4>Are you sure you want to {text} this meeting?</h4>
      <Row type="horizontal">
        <StyledContainer>
          <Button variation="secondary" onClick={onCancel}>Back</Button>
          <Button onClick={() => onConfirm(text)}>{findtext(text)}</Button>
        </StyledContainer>
      </Row>
    </Container>
  );
}

export default MeetingConfirmation;
