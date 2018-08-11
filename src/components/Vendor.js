import React, { Component } from 'react'

class Vendor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 0,
      message: "Sell Food"
    }
  }
  nextStep() {
    this.setState({step: this.state.step+1})
  }
  render() {
    return (
      <div>
          {this.state.step === 0 &&
            <button onClick={() => this.nextStep()}>Sell Food</button>
          }
        <div>{this.state.step}</div>
        {this.state.step === 1 &&
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
            <button onClick={() => this.nextStep()}>
              Sign up as a Vendor
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Vendor