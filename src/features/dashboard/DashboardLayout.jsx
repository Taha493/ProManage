// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from "styled-components";
import { useRecentTasks } from "./useRecentTasks";
import { useRecentMeetings } from "./useRecentMeetings";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import TodayActivity from './TodayActivity';
import WeekActivity from './WeekActivity';

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { tasks, isLoading: isLoading1 } = useRecentTasks();
  const { meetings, isLoading: isLoading2 } = useRecentMeetings();

  if(!isLoading1) console.log(tasks);

  if (isLoading1 || isLoading2) return <Spinner/>;

  return (
    <StyledDashboardLayout>
      <Stats
        tasks={tasks}
        meetings={meetings}
      />
      <TodayActivity />
      <WeekActivity/>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;