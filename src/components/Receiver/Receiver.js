import React, {Component} from 'react'
import ReceiverSignup from './ReceiverSignup'
import {withRouter} from 'react-router-dom';
import MarketItem from '../Market/MarketItem'
import { items } from '../dummyData'
import '../Market/Market.css'

class Receiver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.step || 0,
      currentUser: props.currentUser,
      validAccounts: props.validAccounts,
      message: "Request food",
      name: '',
      ethaccount: ''
    };
    this.nextStep = this.nextStep.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayItems = this.displayItems.bind(this);
  }
  nextStep() {
    this.setState({ step: this.state.step + 1 })
  }

  displayItems() {
    return items
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
            <div className="v">
              {/* <h1 className="fin-title">
                Become a RemitMart Partner
            </h1> */}
              <p>
                We are excited to have you join our community of receivers! To proceed with your food order, we’ll need a little bit of information from you.
            </p>
              <div>
                <button className="gradient-btn" onClick={() => this.nextStep()}>
                  Log into MetaMask to get started
              </button>
              </div>
            </div>
            <div className="v-m">
              <h2>Browse marketplace</h2>
              <div className="grid">
                {this.displayItems().map(item =>
                  <MarketItem key={item.id} {...item} userType={this.state.userType} currentUser={this.props.currentUser} />
                )}
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
          <div className="v">
            <h1>
              Sign up
            </h1>
            <div className="receiver-instructions">
              <p>
                Below are the steps you’ll need to follow to sign up for MetaMask, to receieve food.
              </p>
              <p>1) Install MetaMask on your device</p>
              <p>2) Create a MetaMask account</p>
              <p>3) Confirm</p>
            </div>
            <div className="small-pri-btn" onClick={() => this.nextStep()}>Continue</div>
          </div>
        }
        {this.state.step === 2 &&
          <div>
            <h1>
              Receiver Set up
          </h1>
            <h2>
              1: Create RemitMart Account
          </h2>
            <p>
              Share a bit about yourself, and set your location.
          </p>
            <h2>
              2: View our marketplace
          </h2>
            <p>
              Browse our marketplace and select an item to receive.
          </p>
            <h2>
              3: Go to Dashboard
          </h2>
            <p>
              View status of orders.
          </p>
            <button onClick={() => this.nextStep()}>
              Start
          </button>
          </div>
        }
        {this.state.step === 3 &&
          <div>
            <ReceiverSignup setUserType={this.setUserType} currentUser={this.state.currentUser}
                            loginHandler={this.props.loginHandler} validAccounts={this.state.validAccounts}
                            nextStep={this.nextStep}/>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(Receiver)