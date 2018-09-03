import React, {Component} from 'react'
import {users} from '../dummyData'

class VendorSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      wallet: '',
      address: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      vendorWallet: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      wallet: nextProps.currentUser,
      vendorWallet: nextProps.currentUser
     }))
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    // console.log('A vendor account was submitted: ' + JSON.stringify(this.state))

    let match = false
    const updates = {}
    if (this.state.vendorWallet) updates.vendorWallet = this.state.vendorWallet
    if (this.state.name) updates.name = this.state.name
    if (this.state.address) updates.address = this.state.address
    if (this.state.address2) updates.address2 = this.state.address2
    if (this.state.zipcode) updates.zipcode = this.state.zipcode
    if (this.state.city) updates.city = this.state.city
    if (this.state.country) updates.country = this.state.country
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.state.wallet) {
        users[i] = Object.assign(users[i], updates)
        match = true
      }
    }
    if (!match) {
      users[users.length] = updates
      users[users.length - 1].id = users.length
    }
    window.location = '/v/listitem'
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
                Address:
                <input type="text"
                value={this.state.address}
                onChange={(e) => this.handleChange('address', e)}
                />
              </label>
              <label>
                Address 2:
                <input type="text"
                value={this.state.address2}
                onChange={(e) => this.handleChange('address2', e)}
                />
              </label>
              <label>
                Zip code:
                <input type="text"
                value={this.state.zipcode}
                onChange={(e) => this.handleChange('zipcode', e)}
                />
              </label>
              <label>
                City:
                <input type="text"
                value={this.state.city}
                onChange={(e) => this.handleChange('city', e)}
                />
              </label>
              <label>
                Country:
                <input type="text"
                value={this.state.country}
                onChange={(e) => this.handleChange('country', e)}
                />
              </label>
              <label>
                Ethereum account/payment wallet:
                <input type="text"
                value={this.state.vendorWallet}
                onChange={(e) => this.handleChange('vendorWallet', e)}
                />
              </label>
              <input type="submit" value="Sign up" />
            </form>
          </div>
      </div>
    )
  }
}

export default VendorSignup