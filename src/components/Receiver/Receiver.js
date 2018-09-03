import React, { Component } from 'react'
import ReceiverSignup from './ReceiverSignup'

class Receiver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step || 2,
      currentUser: props.currentUser,
      message: "Request food",
      name: '',
      ethaccount: ''
    }
    this.nextStep = this.nextStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  nextStep() {
    this.setState({ step: this.state.step + 1 })
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
              Be a RemitMart Receiver
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
          </div>
        }
        {this.state.step === 1 &&
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
        {this.state.step === 2 &&
          <div>
            <ReceiverSignup currentUser={this.props.currentUser} nextStep={this.nextStep} />
          </div>
        }
      </div>
    )
  }
}

export default Receiver