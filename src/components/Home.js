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
            <img className="home-img" src="http://miriadna.com/desctopwalls/images/max/In-the-forest.jpg"></img>
            <div className="home-img-txt">
              Inspiring message about people coming together to change communities
            </div>
            <div className='home-btn'>
              <button onClick={() => {
              }}>Get Started
              </button>
            </div>
          </div>
          <div className="call-to-action">
            <div className="cta-intro">
              Some sort of interesting call to action message here // Join our community
            </div>
            <div className="cta-grid">
              <div className="cta-action" onClick={() => {
                this.props.setUserType('v');
                this.props.history.push('/v/signup')
              }}>
                <div className="cta-head">I want to partner</div>
                <p>Contribute to your local community by donating a bag of groceries to feed a family near you</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('d');
                this.props.history.push('/d/signup')
              }}>
                <div className="cta-head">I want to donate</div>
                <p>Contribute to your local community by donating a bag of groceries to feed a family near you</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('r');
                this.props.history.push('/r/signup')
              }}>
                <div className="cta-head">I am looking to receive food</div>
                <p>Contribute to your local community by donating a bag of groceries to feed a family near you</p>
              </div>
            </div>
          </div>
          <div className="our-story">
              <div className="story">
                <h3>Our story</h3>
                <p>
                  Lorenipsum ...
                </p>
              </div>
              <h4>Communities we've reached</h4>
          </div>
        {/* </main> */}
      </div>
    );
  }

}

export default withRouter(Home);


