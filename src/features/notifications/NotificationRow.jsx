/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components";
import { useState } from "react";
import Button from '../../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import formatDateandTime from '../../utlils/FormatDateandTime';
import { MarkAsRead } from '../../api/apiNotifications';
import { SlEnvolope } from "react-icons/sl";
import toast from 'react-hot-toast';
import Modal from '../../ui/Modal';
import NotificationConfirmation from './NotificationConfirmation';

const TableRow = styled.div`
  display: grid;
  grid-template-columns:  ${({ is_read }) =>
    is_read ? '6.5fr 2fr 1fr' : '6.5fr 2fr 0.5fr;'};
  column-gap: 2.5rem;
  align-items: center;
  padding: 1.4rem 2.4rem;
  background-color: ${({ is_read }) =>
    is_read ? 'var(--color-grey-0)' : 'var(--color-red-100)'};

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const CreatedAt = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-grey-500);
  font-family: "Sono";
`;



const Notification = styled.div`
  font-size: 1.6rem;
  font-weight: 900;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const MarkedAsRead = styled.div`
 font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

function NotificationRow({notification}){
const{id,created_at, activity_type, title, is_read} = notification;
const [modal, setModal] = useState(false);
const queryClient = useQueryClient();

function onConfirm(){
  mutate(id);
  setModal(false);
}

const{isLoading, mutate} = useMutation({
    mutationFn: (id)=> MarkAsRead(id),
    onSuccess: ()=> {
        toast.success('Sucessfully marked the notification as read.')
        queryClient.invalidateQueries({
            queryKey: ['notifications']
        })
    },
    onError:()=> toast.error('Could not mark the notification as read.'),
});
return(
    <TableRow role="row" is_read={is_read}>
    <Notification>{activity_type==="task"?`You have been assigned a task "${title}"`:`A meeting has been scheduled by for purpose "${title}"`}</Notification>
    <CreatedAt>{formatDateandTime(created_at)}</CreatedAt>
    {is_read===false? <Button variation="secondary" onClick={()=>setModal(true)}><SlEnvolope/></Button>: <MarkedAsRead>Marked as Read</MarkedAsRead>}
    {modal && <Modal onClose={()=>setModal(false)}>
      <NotificationConfirmation onCancel={()=> setModal(false)} onConfirm={onConfirm}/>
      </Modal>}
    </TableRow>
)
}

export default NotificationRow;