// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import {logout as logoutApi} from '../../api/UserApi';
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
const navigate = useNavigate();
const queryClient = useQueryClient();

const { mutate: logout, isLoading } = useMutation({
  mutationFn: logoutApi,
  onSuccess: () => {
    queryClient.removeQueries();
    navigate("/login", { replace: true });
  },
});
return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;