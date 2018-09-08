import {withRouter} from "react-router-dom";
import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar pure-menu pure-menu-horizontal">
      <a href="/" className="pure-menu-heading pure-menu-link" onClick={(event) => {
        event.preventDefault();
        props.history.push('/');
      }}>RemitMart</a>
      <a className="nav-link text-nowrap text-muted userInfo-a" id="eth-address">
        <i className="fa fa-user fa-fw"></i>
        <span className="userInfo">{props.userName && <span>Hello, {props.userName}</span>}
          {!props.userName &&
        <span>it looks like you don't have Metamask yet, please <a href='/' onClick={(event) => {
          event.preventDefault();
          props.history.push('/')
        }}>SIGNUP</a></span>}</span>
      </a>
    </nav>
  );
};

export default withRouter(Navbar);