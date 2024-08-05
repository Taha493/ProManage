// eslint-disable-next-line no-unused-vars
import React from 'react';
import Row from '../ui/Row';
import TaskTable from '../ui/TaskTable';
function Tasks(){
    return(
        <>
        <Row type="horizontal">
            <h1>All Tasks</h1>
            <p>Filter/Sort</p>
        </Row>

        <Row>
            <TaskTable></TaskTable>
        </Row>
        </>
    )
}

export default Tasks;