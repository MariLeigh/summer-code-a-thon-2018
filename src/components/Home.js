import React from 'react'
import {withRouter} from "react-router-dom";
import '../css/home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {/* <main className="container"> */}
          <div className="home-img-div">
          <img className="home-img hands-img" src="https://s3-alpha.figma.com/img/297b/d89c/03aee371f528151484c00843caab5ad8"></img>
            <div className="home-img-txt">
              An opportunity awaits for each and every one of us to build a stronger community
            </div>
            <div className='home-btn' onClick={() => {
              }}>Get Started
            </div>
          </div>
          <div className="call-to-action">
            <div className="cta-intro">
              What is going to make you better today?
            </div>
            <div className="cta-grid">
              <div className="cta-action" onClick={() => {
                this.props.setUserType('v');
                this.props.history.push('/v/signup')
              }}>
                <div className="cta-head">I want to partner</div>
              <p>Place your items in the marketplace for purchase</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('d');
                this.props.history.push('/d/signup')
              }}>
                <div className="cta-head">I want to donate</div>
              <p>Buy groceries for a person in need</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('r');
                this.props.history.push('/r/signup')
              }}>
                <div className="cta-head">I am looking to ask</div>
              <p>Request groceries to be purchased for you by someone in the community</p>
              </div>
            </div>
          </div>
          <div className="our-story">
              <div className="story">
                <h3>Our story</h3>
                <p>
                  RemitMart started with a small community of female technologists, passionate about a potential solution that could connect people in need with people who can help without a personal connection. The goal is for the community to go wide, across the global, and we're eager to have you along for the ride.
                </p>
              </div>
              <h4>Communities we've reached</h4>
          </div>
        <div className="home-img-div">
          <img className="home-img" src="http://oi68.tinypic.com/2ceq6bk.jpg"></img>
        </div>
        {/* </main> */}
      </div>
    );
  }

}

export default withRouter(Home);


