// eslint-disable-next-line no-unused-vars
import React from 'react'
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function NotificationsOperations(){
return(
    <TableOperations>
    <Filter
     filterField="status"
     options={[
       { value: "all", label: "All" },
       { value: "read", label: "Read" },
       { value: "unread", label: "Unread" },
     ]}/>
    </TableOperations>
)
}

export default NotificationsOperations;