import React, {Component} from 'react'
import {users} from '../dummyData'

class DonorSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wallet: '',
      name: '',
      donorWallet: ''
    }
    this.setUserType = props.setUserType
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      wallet: nextProps.currentUser,
      donorWallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    // console.log('A donor account was submitted: ' + JSON.stringify(this.state))
    event.preventDefault()
    // if (!this.state.wallet) {
    //   alert("Your metamask account is not signed in, unable to add user.")
    //   return
    // }
    let match = false
    const updates = {}
    if (this.state.donorWallet) updates.donorWallet = this.state.donorWallet
    if (this.state.name) updates.name = this.state.name
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.state.wallet) {
        users[i] = Object.assign(users[i], updates)
        match = true
      }
    }
    if (!match) {
      updates.wallet = this.state.wallet
      updates.id = users.length + 1
      users[users.length] = updates
    }
    window.location = '/market?type=d'
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
                <input type="text"
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e)}
              />
            </label>
            <label>
              Ethereum account/payment wallet:
                <input type="text"
                       value={this.state.donorWallet}
                       onChange={(e) => this.handleChange('donorWallet', e)}
              />
            </label>
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    )
  }
}

export default DonorSignup