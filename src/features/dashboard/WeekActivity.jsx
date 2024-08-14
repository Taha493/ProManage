// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";

import Row from "../../ui/Row";

import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";
import { useWeeklyActivity } from "./useWeeklyActivity";

const StyledToday = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
 grid-column: 3 / span 2;
padding-top: 2.4rem;
`;

const TodayList = styled.ul`
  overflow: scroll;
  overflow-x: hidden;

  /* Removing scrollbars for webkit, firefox, and ms, respectively */
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const NoActivity = styled.p`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 0.8rem;
`;

function WeekActivity() {
  const { tasks, isLoading } = useWeeklyActivity();

  return (
    <StyledToday>
      <Row type="horizontal">
        <h2>This Week&apos;s Tasks</h2>
      </Row>

      {!isLoading ? (
        tasks?.length > 0 ? (
          <TodayList>
            {tasks.map((task) => (
              <TodayItem task={task} key={task.id} />
            ))}
          </TodayList>
        ) : (
          <NoActivity>No activity coming week...</NoActivity>
        )
      ) : (
        <Spinner />
      )}
    </StyledToday>
  );
}

export default WeekActivity;