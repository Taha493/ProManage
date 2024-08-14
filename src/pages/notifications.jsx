// eslint-disable-next-line no-unused-vars
import React from 'react';
import Row from '../ui/Row';
import NotificationsOperations from '../features/notifications/NotificationsOperations';
import NotificationsTable from '../ui/NotificationsTable';
function Notifications(){
    return(
        <>
        <Row type="horizontal">
            <h1>All Notifications</h1>
            <NotificationsOperations/>
        </Row>

        <Row>
            <NotificationsTable></NotificationsTable>
        </Row>
        </>
    )
}

export default Notifications;