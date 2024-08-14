// eslint-disable-next-line no-unused-vars
import React from 'react'
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function TaskTableOperations(){
return(
    <TableOperations>
    <Filter
     filterField="status"
     options={[
       { value: "all", label: "All" },
       { value: "done", label: "Done" },
       { value: "pending", label: "Pending" },
     ]}/>
    </TableOperations>
)
}

export default TaskTableOperations;