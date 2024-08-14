// eslint-disable-next-line no-unused-vars
import React from 'react';
import Row from '../ui/Row';
import MeetingTableOperations from '../features/meetings/MeetingsOperations';
import MeetingTable from '../ui/MeetingTable';
function Tasks(){
    return(
        <>
        <Row type="horizontal">
            <h1>All Meetings</h1>
            <MeetingTableOperations/>
        </Row>

        <Row>
            <MeetingTable></MeetingTable>
        </Row>
        </>
    )
}

export default Tasks;