import {withRouter} from "react-router-dom"
import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    // console.log(nextProps.type)
    // console.log(nextProps.type[0])
    if (nextProps.type && nextProps.type[0] === 'v') {
      this.setState(( {vendorView: true}))
    }
    this.setState(({
      viewType: nextProps.type
    }))
  }

  render() {
    return (
      <div className="nav">
        <span><i className="nav-title color-box"></i><a href="/" className="nav-title" onClick={(event) => {
          event.preventDefault();
          this.props.history.push('/');
        }}>RemitMart</a></span>

        {!this.state.vendorView &&
          <div>
            <span>
            <a href="/" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/');
              }}>About us</a></span>
            <span><a href="/d/signup" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/d/signup');
            }}>Donate</a></span>
            <span><a href="/v/signup" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/v/signup');
            }}>Partners</a></span>
            <span><a href="/r/signup" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/r/signup');
            }}>Receive</a></span>
          </div>
        }
        {this.state.vendorView &&
          <div>
            <span><a href="/v/listitem" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/v/listitem');
            }}>Create Packets</a></span>
            <span><a href="/v/dash" className="nav-link" onClick={(event) => {
              event.preventDefault();
              this.props.history.push('/v/dash');
            }}>Dashboard</a></span>
          <span><a href="/market?type" className="nav-link" onClick={(event) => {
              event.preventDefault();
            this.props.history.push('/market?type');
            }}>Marketplace</a></span>
          </div>
        }
        <a className="userInfo" id="eth-address">
          <i className="fa fa-user fa-fw"></i>
          <span className="userInfo">{this.props.userName && <span>Hello, {this.props.userName}</span>}
            {!this.props.userName &&
          <span>it looks like you don't have Metamask yet, please <a href='/' onClick={(event) => {
            event.preventDefault();
            this.props.history.push('/')
          }}>SIGNUP</a></span>}</span>
        </a>
      </div>
    );
  };
}

export default withRouter(Navbar);