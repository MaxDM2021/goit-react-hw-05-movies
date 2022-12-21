import styled from 'styled-components';
import {
  BsFillCameraReelsFill,
  BsFillHouseFill
} from 'react-icons/bs';

import { NavLink } from 'react-router-dom';
import { Box } from './Box';

const navItems = [
  { href: 'home', text: 'Home', icon: BsFillHouseFill },
  { href: 'movies', text: 'Movies', icon: BsFillCameraReelsFill },

];

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const AppBar = () => {
  return (
    <Box as="header" p={4} height="10vh" borderBottom="1px solid black">
      <Box as="nav" display="flex">
        {navItems.map(({ href, text, icon: Icon }) => (
        <NavItem to={href} key={href}>
            <Icon size="16"/>
        {text}
       </NavItem>
        ))}
      </Box>
    </Box>
  );
};