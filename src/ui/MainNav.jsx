import { NavLink } from "react-router-dom";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  HiCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";
import {IoMdNotificationsOutline  } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../api/apiNotifications";
import Spinner from "./Spinner";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: var(--color-grey-600);
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1.2rem 2.4rem;
  transition: all 0.3s;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  right: 16rem;
  background-color: red;
  color: white;
  padding: 0.05px 0.05px;
 width: 0.7rem; // Small width for a dot-like appearance
  height: 0.7rem; // Small height for a dot-like appearance
  border-radius: 100%;
  font-size:0.1px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const NotificationLink = styled(StyledNavLink)`
  position: relative;
`;

function MainNav() {
  const {data: notifications, isLoading} = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  })

   if(isLoading) return(<Spinner></Spinner>);
  
  const hasUnreadNotifications = notifications.some(
    (notification) => notification.is_read === false
  );
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
        <NotificationLink to="/notifications">
            <IoMdNotificationsOutline />
            <span>Notifications</span>
            <Badge show={hasUnreadNotifications}></Badge>
          </NotificationLink>
        </li>
        <li>
          <StyledNavLink to="/tasks">
            <FaTasks />
            <span>Tasks</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/meetings">
            <HiCalendarDays />
            <span>Meetings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <MdManageAccounts />
            <span>Account</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
