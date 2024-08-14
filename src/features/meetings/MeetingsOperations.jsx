// eslint-disable-next-line no-unused-vars
import React from 'react'
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function MeetingTableOperations(){
return(
    <TableOperations>
    <Filter
     filterField="status"
     options={[
       { value: "all", label: "All" },
       { value: "scheduled", label: "Scheduled" },
       { value: "cancelled", label: "Cancelled" },
       { value: "postponed", label: "Postponed" },
       {value: "completed", label: "Completed"}
     ]}/>
    </TableOperations>
)
}

export default MeetingTableOperations;