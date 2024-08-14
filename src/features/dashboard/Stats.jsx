/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';  
import {
    HiOutlineCalendarDays,
  } from "react-icons/hi2";

  import { GoTasklist } from "react-icons/go";
  import { MdTaskAlt } from "react-icons/md";
  import { PiMegaphoneFill } from "react-icons/pi";


  import Stat from "./Stat";
  
  function Stats({tasks, meetings}) {
    // 1.
    const numTasks = tasks?.length;
  
    // 2.
    const doneTasksCount = tasks?.filter(task => task.status === "done")?.length;
  
    // 3.
    const numMeetings = meetings?.length;
  
    // 4.
    const attendedMeetingsCount = meetings?.filter(meeting => meeting.status === "completed")?.length;
  
    return (
      <>
        <Stat
          title="Tasks Assigned"
          color="blue"
          icon={<GoTasklist />}
          value={numTasks}
        />
        <Stat
          title="Tasks Completed"
          color="green"
          icon={<MdTaskAlt />}
          value={doneTasksCount}
        />
        <Stat
          title="Meetings Scheduled"
          color="indigo"
          icon={<HiOutlineCalendarDays />}
          value={numMeetings}
        />
        <Stat
          title="Meetings Attended"
          color="yellow"
          icon={<PiMegaphoneFill />}
          value={attendedMeetingsCount}
        />
      </>
    );
  }
  
  export default Stats;