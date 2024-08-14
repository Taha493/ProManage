/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from "styled-components";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import formatDateandTime from '../../utlils/FormatDateandTime';
import Tag from '../../ui/Tag';
import Button from '../../ui/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Modal from '../../ui/Modal';
import MeetingConfirmation from './meetingConfirmation';
import { MdCancel, MdOutlineWatchLater , MdOutlineDone } from "react-icons/md";
import Row from '../../ui/Row';
import { MarkMeeting } from '../../api/apiMeetings';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1.6fr 1.5fr 1.5fr 1.9fr 1.5fr;
  column-gap: 2.5rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Meeting = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Done = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-stone-700);
`;

const ScheduleAt = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const statusToTagName = {
  'scheduled': 'green',
  'cancelled': 'red',
  'postponed': 'grey',
  'completed': 'blue',
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: 1rem;
`;

function MeetingRow({ meeting }) {
  const { id, organizer, purpose, schedule_at, duration, status } = meeting;
  const hour = Math.floor(duration / 60);
  const min = duration % 60;
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const queryClient = useQueryClient();

  function onConfirm(s) {
    mutate({ id, status: s });
    setModal(false);
  }

  function CancelMeeting() {
    setModalType('cancelMeeting');
    setModal(true);
  }

  function PostponeMeeting() {
    setModalType('postponeMeeting');
    setModal(true);
  }

  function CompleteMeeting() {
    setModalType('completeMeeting');
    setModal(true);
  }

  const { isLoading, mutate } = useMutation({
    mutationFn: ({ id, status }) => {
      switch (status) {
        case "postpone":
          return MarkMeeting(id, "postponed");
        case "complete":
          return MarkMeeting(id, "completed");
        default:
          return MarkMeeting(id, "cancelled");
      }
    },
    onSuccess: (data, variables) => {
      const action = variables.status === "postpone" ? "postponed" : variables.status === "complete" ? "completed" : "cancelled";
      toast.success(`Successfully ${action} the meeting.`);
      queryClient.invalidateQueries({
        queryKey: ['meetings']
      });
    },
    onError: (error, variables) => {
      const action = variables.status === "postpone" ? "postpone" : variables.status === "complete" ? "complete" : "cancel";
      toast.error(`Could not ${action} the meeting.`);
    },
  });

  return (
    <TableRow role="row">
      <Meeting>{organizer}</Meeting>
      <div>{purpose}</div>
      <ScheduleAt>{formatDateandTime(schedule_at)}</ScheduleAt>
      <div>{hour > 0 && `${hour} hr`} {min} mins</div>
      <Tag type={statusToTagName[status]}>{status}</Tag>
      {status === 'scheduled' ?
        <StyledContainer>
          <Button variation="danger" onClick={CancelMeeting}>
            <MdCancel />
          </Button>
          <Button variation="secondary" onClick={PostponeMeeting}>
            <MdOutlineWatchLater />
          </Button>
          <Button onClick={CompleteMeeting}>
            <MdOutlineDone />
          </Button>
        </StyledContainer>
        : <Done>
          {status === "cancelled" && "Meeting has been cancelled"}
          {status === "postponed" && "Meeting has been postponed"}
          {status === "completed" && "Meeting has been completed"}
        </Done>}
      {modal && modalType === 'cancelMeeting' && <Modal onClose={() => setModal(false)}>
        <MeetingConfirmation onCancel={() => setModal(false)} onConfirm={onConfirm} text="cancel" />
      </Modal>}
      {modal && modalType === 'postponeMeeting' && <Modal onClose={() => setModal(false)}>
        <MeetingConfirmation onCancel={() => setModal(false)} onConfirm={onConfirm} text="postpone" />
      </Modal>}
      {modal && modalType === 'completeMeeting' && <Modal onClose={() => setModal(false)}>
        <MeetingConfirmation onCancel={() => setModal(false)} onConfirm={onConfirm} text="complete" />
      </Modal>}
    </TableRow>
  );
}

export default MeetingRow;
