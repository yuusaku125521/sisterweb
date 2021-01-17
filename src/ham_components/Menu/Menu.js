import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';


const Menu = ({ open, ...props }) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="./home" tabIndex={tabIndex}>
        Home
      </a>
      <a href="./Profile" tabIndex={tabIndex}>
        Profile
        </a>
      <a href="/work" tabIndex={tabIndex}>
        Work
        </a>
      <a href="/contact" tabIndex={tabIndex}>
        Contact
        </a>
        
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;