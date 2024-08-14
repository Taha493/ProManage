// eslint-disable-next-line no-unused-vars
import React from 'react'
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <h1>Update your account</h1>

      <Row>
        <h3>Update user data</h3>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <h3>Update password</h3>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;