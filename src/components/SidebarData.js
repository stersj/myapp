import React from 'react';
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from '@material-ui/icons/Facebook';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <MailIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <GitHubIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <LinkedInIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <InstagramIcon/>,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FacebookIcon />,
    cName: 'nav-text'
  }
  
];