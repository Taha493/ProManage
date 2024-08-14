/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import Tag from "../../ui/Tag";
import formatDateandTime from "../../utlils/FormatDateandTime";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1.5fr;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;


const Guest = styled.div`
  font-weight: 500;
  width: 10rem;
`;

function WeekItem({ task }) {
  const {status, title, deadline } = task;

  return (
    <StyledTodayItem>
      {status === "pending" && <Tag type="red">Pending</Tag>}
      {status === "done" && <Tag type="green">Completed</Tag>}

      <Guest>{title}</Guest>
      <Guest> Due at {formatDateandTime(deadline)}</Guest>
    </StyledTodayItem>
  );
}

export default WeekItem;