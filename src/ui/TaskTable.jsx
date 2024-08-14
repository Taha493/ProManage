// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { getTasks } from '../api/apiTasks';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import Spinner from './Spinner';
import TaskRow from '../features/tasks/TaskRow';
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 1.8fr 2.4fr 1.5fr 1.2fr 1fr;
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

function TaskTable(){
  const {data: tasks, isLoading} = useQuery({
    queryKey: ['task'],
    queryFn: getTasks,
  })
  const [searchParams] = useSearchParams();
  if(isLoading) return <Spinner/>;
  const filterValue = searchParams.get("status") || "all";

  let filteredTasks;
  if (filterValue === "all") filteredTasks = tasks;
  if (filterValue === "pending")
    filteredTasks = tasks.filter((task) => task.status === 'pending');
  if (filterValue === "done")
    filteredTasks = tasks.filter((task) => task.status === 'done');
  return(
    <Table role="table">
      <TableHeader role="row">
        <div>Title</div>
        <div>Description</div>
        <div>Status</div>
        <div>Deadline</div>
        <div>Actions</div>
      </TableHeader>
      {filteredTasks.map((task)=><TaskRow task={task} key = {task.id}/>)}
    </Table>
  )
}

export default TaskTable;