import React, {Component} from 'react'
import VendorSignup from './VendorSignup'
import VendorListItem from './VendorListItem'
import {withRouter} from "react-router-dom";

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
      ethaccount: ''
    }
    this.nextStep = this.nextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  nextStep() {
    this.setState({step: this.state.step+1})
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        {this.state.step === 0 &&
          <div>
            <h1>
              Be a RemitMart Vendor
            </h1>
            <p>
              Sign up as a vendor to supply goods to those in need. You'll be able to list items for sale, and specify your distribution locations.
            </p>
            <h2>
              Install Metamask
            </h2>
            <p>
              MetaMask is a third-party extension/add-on available through Google Chrome and Mozilla Firefox; it is necessary to use our application.
            </p>
            <p>
              Your MetaMask account number will be how we identify you, please keep an extra copy of your account number and seed passphrase!
            </p>
            <p>
              Watch this video to learn how to install MetaMask:
            </p>
            <iframe width="364.25" height="193.75" src="https://www.youtube.com/embed/6Gf_kRE4MJU" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
            <br></br>
            <button onClick={() => this.nextStep()}>
              Next step
            </button>
            <button onClick={() => {
              this.props.loginHandler("0x559c7dcd5f1fd32925569f9baabc77b039df9dph")
              this.props.history.push('/v/dash')
            }}>
              Sign in as testUser
            </button>
          </div>
        }
        {this.state.step === 1 &&
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
        {this.state.step === 2 &&
        <div>
          <VendorSignup setUserType={this.setUserType} currentUser={this.props.currentUser}
                        loginHandler={this.props.loginHandler} validAccounts={this.state.validAccounts}
                        nextStep={this.nextStep}/>
        </div>
        }
        {this.state.step === 3 &&
        <div>
          <VendorListItem currentUser={this.props.currentUser}/>
        </div>
      }
      </div>
    )
  }
}

export default withRouter(Vendor)