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
              An opportunity awaits for each and every one of us to build a stronger community together
            </div>
            <div className='fin-btn home-btn' onClick={() => {
              }}>Get Started
            </div>
          </div>
          <div className="call-to-action">
            <div className="cta-intro">
            <h2 className="home-title fin-title">What will help make you better today?</h2>
            </div>
            <div className="cta-grid">
              <div className="cta-action" onClick={() => {
                this.props.setUserType('d');
                this.props.history.push('/d/signup')
            }}><img src={require("../images/donate_icon.png")}></img>
                <div className="cta-head">Donate</div>
              <p>Buy groceries for a person in need</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('v');
                this.props.history.push('/v/signup')
            }}><img src={require("../images/partner_icon.png")}></img>
                <div className="cta-head">Partner</div>
              <p>Place your items in the marketplace to be purchased for someone in your community</p>
              </div>
              <div className="cta-action" onClick={() => {
                this.props.setUserType('r');
                this.props.history.push('/r/signup')
            }}><img src={require("../images/food_icon.png")}></img>
                <div className="cta-head">Find food</div>
              <p>Request groceries to be purchased for you by someone in the community</p>
              </div>
            </div>
          </div>
          <div className="our-story">
              <div className="story">
                <h3 className="home-title fin-title">Our story</h3>
                <p>
                  Are you familiar with remittances? Sending money across boarders home to friends and family in need? RemitMart expands this giving base by removing the trust found in established friend/family relationships. We are an all women’s team of designers, engineers and project managers working together in a She’s Coding hackathon project.
                </p>
              </div>
          </div>
          <div className="communities">
            <h4 className="home-title fin-title">Communities we've reached</h4>
            <div className="home-img-div">
            <img className="home-img" src={require("../images/communities_map.png")}></img>
          </div>
        </div>
        {/* </main> */}
      </div>
    );
  }

}

export default withRouter(Home);


