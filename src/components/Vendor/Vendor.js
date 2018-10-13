import React, {Component} from 'react'
import VendorSignup from './VendorSignup'
import VendorListItem from './VendorListItem'
import {withRouter} from "react-router-dom";
import MarketItem from '../Market/MarketItem'
import { items } from '../dummyData'
import '../../css/vendor.css'
import '../Market/Market.css'

class Vendor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step || 0,
      currentUser: props.currentUser,
      validAccounts: props.validAccounts,
      message: "Sell Food",
      name: '',
      address: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      ethaccount: '',
      userType: '',
      signupModal: false
    }
    this.nextStep = this.nextStep.bind(this)
    this.backStep = this.backStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.displayItems = this.displayItems.bind(this)
    this.firstToggle = this.firstToggle.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState(({
      validAccounts: nextProps.validAccounts,
      currentUser: nextProps.currentUser
    }))
  }
  nextStep() {
    this.setState({step: this.state.step+1})
  }
  backStep() {
    this.setState({step: this.state.step-1})
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  displayItems() {
    return items
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
            <h1>
              Become a RemitMart Partner
            </h1>
            <p>
              Join our partner community by supplying goods to those in need. You'll be able to list items for sale, and specify your distribution locations.
            </p>
            <button className="primary-btn" onClick={() => this.nextStep()}>
              Log into MetaMask to get started
            </button>
            </div>
            <div className="v-m">
              <h2>Explore other partner's marketplace</h2>
              <div className="grid">
                {this.displayItems().map(item =>
                  <MarketItem key={item.id} {...item} userType={this.state.userType} currentUser={this.props.currentUser} />
                )}
              </div>
            </div>
            <div className="get-started">
              <button className="primary-btn" onClick={() => this.nextStep()}>
                Get started with MetaMask
              </button>
            </div>
          </div>
        }
        {this.state.step === 1 &&
        <div className='v'>
            <h1>
              Join MetaMask to become our Partner
            </h1>
            <p>
              MetaMask is a third-party extension/add-on available through Google Chrome and Mozilla Firefox. RemitMart is optimized for cryptocurrency and blockchain. Metamask works nicely with this technology, so to partner with us, please sign up for MetaMask.
            </p>
            <p>
              Your MetaMask account number will be how we identify you, please keep an extra copy of your account number and seed passphrase!
            </p>
            <div className='primary-btn' onClick={this.firstToggle}>
              I've logged into Metamask
            </div>
            <button onClick={() => {
              this.props.loginHandler("0x559c7dcd5f1fd32925569f9baabc77b039df9dph")
              this.props.history.push('/v/dash')
            }}>
              Sign in as testUser
            </button>
            <div className='metamask-vid'>
            <h3>
              To learn more about MetaMask, watch a short video:
            </h3>
            <iframe width="364.25" height="193.75" src="https://www.youtube.com/embed/6Gf_kRE4MJU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
            </div>
            <br></br>
            <div className='back-btn' onClick={() => this.backStep()}>
              Back to Partners page
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
                  <VendorSignup setUserType={this.setUserType} currentUser={this.props.currentUser}
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
          <h1>
            Vendor Set up
          </h1>
          <h2>
            1: Create RemitMart Account
          </h2>
          <p>
            Connect your Ethereum wallet to enable payments, set location and delivery options
          </p>
          <h2>
            2: List your items
          </h2>
          <p>
            Add items to our marketplace
          </p>
          <h2>
            3: Go to Dashboard
          </h2>
          <p>
            View orders, confirm shipment, and accept payments
          </p>
          <button onClick={() => this.nextStep()}>
            Start
          </button>
        </div>
        }
        {this.state.step === 3 &&
        <div>
          <VendorSignup setUserType={this.setUserType} currentUser={this.props.currentUser}
                        loginHandler={this.props.loginHandler} validAccounts={this.props.validAccounts}
                        nextStep={this.nextStep}/>
        </div>
        }
        {this.state.step === 4 &&
        <div>
          <VendorListItem currentUser={this.props.currentUser}/>
        </div>
      }
      </div>
    )
  }
}

export default withRouter(Vendor)