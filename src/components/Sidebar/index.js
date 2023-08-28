import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarMenu>
      <SidebarLink to='breakfast'>Break Fast</SidebarLink>
      <SidebarLink to='lunchanddinner'>Dinner & Lunch</SidebarLink>
      <SidebarLink to='sweets'>Sweets</SidebarLink>
      <SidebarLink to='snacks'>Fast Food & Snacks</SidebarLink>
      <SidebarLink to='bbq'>BBQ Fried Steam</SidebarLink>
    </SidebarMenu>
    <SideBtnWrap>
      <a style={{ color: '#fff', textDecoration: 'none' }} href='#contact'>
        Order Now
      </a>
    </SideBtnWrap>
  </SidebarContainer>
);

export default Sidebar;
