// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { getNotifications } from '../api/apiNotifications';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import Spinner from './Spinner';
import NotificationRow from '../features/notifications/NotificationRow';
const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;


function NotificationsTable(){
  const {data: notifications, isLoading} = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  })
  const [searchParams] = useSearchParams();
  if(isLoading) return <Spinner/>;
  const filterValue = searchParams.get("status") || "all";

  let filteredNotifications
  if (filterValue === "all") filteredNotifications = notifications;
  if (filterValue === "read")
    filteredNotifications = notifications.filter((notification) => notification.is_read === true);
  if (filterValue === "unread")
    filteredNotifications = notifications.filter((notification) => notification.is_read === false);
  return(
    <Table role="table">
      {filteredNotifications.map((notification)=><NotificationRow notification={notification} key = {notification.id}/>)}
    </Table>
  )
}

export default NotificationsTable;