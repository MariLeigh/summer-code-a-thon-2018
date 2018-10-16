import React, {Component} from 'react'
import DonorSignup from './DonorSignup'
import {withRouter} from "react-router-dom";

class Donor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step || 0,
      currentUser: props.currentUser,
      validAccounts: props.validAccounts,
      message: "Donate",
      name: '',
      ethaccount: ''
    }
    this.nextStep = this.nextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.backStep = this.backStep.bind(this)
    this.firstToggle = this.firstToggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  nextStep() {
    this.setState({ step: this.state.step + 1 })
  }

  backStep() {
    this.setState({ step: this.state.step - 1 })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  firstToggle(event) {
    event.preventDefault()
    this.setState({ signupModal: true })
  }

  toggleModal(e) {
    if (e.target.className === 'fa fa-times close') this.setState({ signupModal: false })
  }

  render() {
    return (
      <div>
        {this.state.step === 0 &&
          <div>
            <div className="v">
              <h1 className="fin-title">
                Help others receive food
              </h1>
              <p>
                Join our community by donating expenses for groceries. Browse profiles and read stories of the families that will benefit from your kindness.
              </p>
              <div>
                <button className="gradient-btn" onClick={() => this.nextStep()}>
                  Log into MetaMask to get started
                </button>
              </div>
            </div>
            <div className="v-m">
              <h2>Discover stories</h2>
              <div className="grid">
                {/* {this.displayItems().map(item =>
                  <MarketItem key={item.id} {...item} userType={this.state.userType} currentUser={this.props.currentUser} />
                )} */}
              </div>
            </div>
            <div className="get-started top-btm">
              <button className="fin-btn meta-btn" onClick={() => this.nextStep()}>
                Get started with MetaMask
                </button>
            </div>
          </div>
        }

        {this.state.step === 1 &&
          <div className='v'>
            <h1 className="fin-title">
              Donate by joining MetaMask
            </h1>
            <p>
              MetaMask is a third-party extension/add-on available through Google Chrome and Mozilla Firefox. RemitMart is optimized for cryptocurrency and blockchain. Metamask works nicely with this technology, so to partner with us, please sign up for MetaMask.
            </p>
            <p>
              Your MetaMask account number will be how we identify you, please keep an extra copy of your account number and seed passphrase!
            </p>
            <button className='gradient-btn' onClick={this.firstToggle}>
              I've logged into Metamask
            </button>
            <div className='metamask-vid'>
              <h3>
                To learn more about MetaMask, watch a short video:
            </h3>
              <iframe width="728.5" height="387.5" src="https://www.youtube.com/embed/6Gf_kRE4MJU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen>
              </iframe>
            </div>
            <br></br>
            <div className='back-btn' onClick={() => this.backStep}>
              Back
            </div>
            {this.state.signupModal &&
              <div className='signupModal'>
                <i className="fa fa-times close" onClick={this.toggleModal}></i>
                {!this.state.currentUser &&
                  <div>
                    <h4 className="p-title">Sign into MetaMask</h4>
                    <p>Click on the MetaMask icon in the upper right to sign in.</p>
                    <div className="signupModal-bottom">
                      <span>Don't have MetaMask, <a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn">install it now</a>.</span>
                      <div className="primary-btn next-btn">Next</div>
                    </div>
                  </div>
                }
                {this.state.currentUser &&
                  <div>
                    <h4 className="p-title">Thanks for signing in</h4>
                    <text>To complete the sign up, fill in some more information.</text>
                    <div className='signupForm'>
                      <DonorSignup setUserType={this.setUserType} currentUser={this.props.currentUser}
                        loginHandler={this.props.loginHandler} validAccounts={this.state.validAccounts}
                        nextStep={this.nextStep} />
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        }
        {this.state.step === 2 &&
          <div>
            <DonorSignup setUserType={this.setUserType} currentUser={this.props.currentUser}
                         loginHandler={this.props.loginHandler} validAccounts={this.state.validAccounts}
                         nextStep={this.nextStep}/>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(Donor)