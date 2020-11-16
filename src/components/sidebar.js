import React, { Component } from 'react';
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../esyl1.jpg";

export default class SideBar extends Component{
    render() {
        return (
    <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Esther Sim</a></h1>
              <span className="email"><i className="icon-mail"></i> esthersyl@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
        <nav id="colorlib-main-menu">
            
            <img className="rounded-circle"
              alt="estherimage"
              src={logo}
              style={{ width: 80, height: 80, borderRadius: 50}}
            />
                    <List>
            {["Esther Sim", "esthersyl@gmail.com", "Introduction"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index === 0 && <AccountCircleIcon />}
                    {index === 1 && <MailIcon />}
                    {index === 2 && <GitHubIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            <ListItem button component='a' href="https://www.linkedin.com/in/esther-sim-jensen/" >
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
            <ListItemText primary='LinkedIn' button/>
            </ListItem>
            <ListItem button component='a' href="https://www.facebook.com/stersj/">                   
               <ListItemIcon>
                  <InstagramIcon />
               </ListItemIcon>
                             <ListItemText primary='Instagram' button/>
            </ListItem>
                <ListItem button component='a' href="https://github.com/stersj">
               <ListItemIcon>
                  <GitHubIcon />
                    </ListItemIcon>
             <ListItemText primary='GitHub' button/>
            </ListItem>
          </List>                
         </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br>
                  Made using Open-sourced code by <a href="https://github.com/stersj" target="_blank" rel="noopener noreferrer">Esther Sim</a> for inspiration 
              </small></p>
              <p><small>
                Something new is coming soon !!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    );
}
}