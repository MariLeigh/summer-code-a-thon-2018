import React, { Component } from 'react'
import { users } from '../dummyData'

class ReceiverSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      description: '',
      photoUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    this.setState(({
      wallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    console.log('A receiver account was submitted: ' + JSON.stringify(this.state))
    event.preventDefault()
    let match = false
    const updates = {}
    if (this.state.name) updates.name = this.state.name
    if (this.state.address) updates.address = this.state.address
    if (this.state.address2) updates.address2 = this.state.address2
    if (this.state.zipcode) updates.zipcode = this.state.zipcode
    if (this.state.city) updates.city = this.state.city
    if (this.state.country) updates.country = this.state.country
    if (this.state.description) updates.description = this.state.description
    if (this.state.photoUrl) updates.photoUrl = this.state.photoUrl
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.state.wallet) {
        users[i] = Object.assign(users[i], updates)
        match = true
      }
    }
    if (!match) {
      console.log(users)
      updates.wallet = this.state.wallet
      updates.id = users.length + 1
      users[users.length] = updates
      console.log(users)
    }
    window.location = '/market?type=receiver'
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
              Description:
                <input type="text"
                value={this.state.description}
                onChange={(e) => this.handleChange('description', e)}
              />
            </label>
            <label>
              Image URL:
                <input type="text"
                value={this.state.photoUrl}
                onChange={(e) => this.handleChange('photoUrl', e)}
              />
            </label>
            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    )
  }
}

export default ReceiverSignup