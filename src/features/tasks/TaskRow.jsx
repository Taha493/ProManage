/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import styled from "styled-components";
import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash} from "react-icons/hi2";
import formatDateandTime from '../../utlils/FormatDateandTime';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MarkAsDone } from '../../api/apiTasks';
import toast from 'react-hot-toast';
import Modal from '../../ui/Modal';
import Confirmation from './Confirmation';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 2.4fr 1.5fr 1.2fr 1fr;
  column-gap: 2.5rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Task = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Done = styled.div`
 font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Deadline = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-red-700);
`;

const statusToTagName = {
    'pending': 'red',
    'done': 'green',
  };

function TaskRow({task}){
const{id, title, description, status, deadline} = task;
const [modal, setModal] = useState(false);
const queryClient = useQueryClient();

function onConfirm(){
  mutate(id);
  setModal(false);
}

const{isLoading, mutate} = useMutation({
    mutationFn: (id)=> MarkAsDone(id),
    onSuccess: ()=> {
        toast.success('Sucessfully marked the task as done.')
        queryClient.invalidateQueries({
            queryKey: ['task']
        })
    },
    onError:()=> toast.error('Could not mark the task as done.'),
});
return(
    <TableRow role="row">
    <Task>{title}</Task>
    <div>{description}</div>
    <Tag type={statusToTagName[status]}>{status}</Tag>
    <Deadline>{formatDateandTime(deadline)}</Deadline>
    {status==='pending' ? <Button size="small" onClick={()=>setModal(true)}>Mark as done</Button>: <Done>Marked as Done</Done>}
    {modal && <Modal onClose={()=>setModal(false)}>
      <Confirmation onCancel={()=> setModal(false)} onConfirm={onConfirm}/>
      </Modal>}
    </TableRow>
)
}

export default TaskRow;