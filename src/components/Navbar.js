import {withRouter} from "react-router-dom"
import React, { Component } from 'react'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // vendorView: true
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    // console.log(nextProps.type)
    // console.log(nextProps.type[0])
    if (nextProps.type && nextProps.type[0] === 'v') {
      this.setState(( {vendorView: true}))
    }
    if (nextProps.type && nextProps.type[0] === 'r') {
      this.setState(( {receiverView: true}))
    }
    if (nextProps.type && nextProps.type[0] === 'd') {
      this.setState(( {donorView: true}))
    }
    this.setState(({
      viewType: nextProps.type
    }))
  }

  render() {
    return (
      <div className="nav">
        <span><img src={require("../images/logo.svg")} className="nav-title nav-logo"></img><a href="/" className="nav-title nav-name" onClick={(event) => {
          event.preventDefault();
          this.props.history.push('/');
        }}>RemitMart</a></span>
        <div className="nav-right">
          {!this.state.vendorView && !this.state.donorView && !this.state.receiverView &&
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
            <span className="userInfo">
              {this.props.userName &&
                <span>
                  <i className="fa fa-user fa-fw"></i>
                  Hello, {this.props.userName}
                </span>
              }
              {!this.props.userName &&
                <span>
                  <div className="nav-signin-btn" onClick={(event) => {
                    event.preventDefault();
                    this.props.history.push('/')
                  }}>Sign In</div>
                </span>
              }
              </span>
            </a>
        </div>
      </div>
    );
  };
}

export default withRouter(Navbar);