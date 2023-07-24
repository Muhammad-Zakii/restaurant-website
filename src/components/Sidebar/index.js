import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='breakfast'>Break Fast</SidebarLink>
        <SidebarLink to='lunchanddinner'>Dinner & Lunch</SidebarLink>
        <SidebarLink to='sweets'>Sweets</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <a style={{ color: '#fff', textDecoration: 'none' }} href='#contact'>
          Order Now
        </a>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
