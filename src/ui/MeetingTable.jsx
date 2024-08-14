// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { getMeetings } from '../api/apiMeetings';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import Spinner from './Spinner';
import MeetingRow from '../features/meetings/MeetingRow';
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.6fr 1.6fr 1.5fr 1.5fr 1.9fr 1.5fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function MeetingTable(){
  const {data: meetings, isLoading} = useQuery({
    queryKey: ['meetings'],
    queryFn: getMeetings,
  })
  const [searchParams] = useSearchParams();
  if(isLoading) return <Spinner/>;
  const filterValue = searchParams.get("status") || "all";

  let filterMeetings;
  if (filterValue === "all") filterMeetings = meetings;
  if (filterValue === "scheduled")
    filterMeetings = meetings.filter((meeting) => meeting.status === 'scheduled');
  if (filterValue === "postponed")
    filterMeetings = meetings.filter((meeting) => meeting.status === 'postponed');
  if (filterValue === "cancelled")
    filterMeetings = meetings.filter((meeting) => meeting.status === 'cancelled');
  if (filterValue === "completed")
    filterMeetings = meetings.filter((meeting) => meeting.status === 'completed');
  return(
    <Table role="table">
      <TableHeader role="row">
        <div>Organizer</div>
        <div>Purpose</div>
        <div>Schedule at</div>
        <div>Duration</div>
        <div>Status</div>
        <div>Actions</div>
      </TableHeader>
      {filterMeetings.map((meeting)=><MeetingRow meeting={meeting} key = {meeting.id}/>)}
    </Table>
  )
}

export default MeetingTable;