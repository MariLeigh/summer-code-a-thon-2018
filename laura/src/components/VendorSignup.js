import React, { Component } from 'react'

class VendorSignup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      ethaccount: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    console.log('A vendor account was submitted: ' + JSON.stringify(this.state))
    event.preventDefault()
    location = '/v/listitem'
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
                Ethereum account:
                <input type="text"
                value={this.state.ethaccount}
                onChange={(e) => this.handleChange('ethaccount', e)}
                />
              </label>
              <input type="submit" value="Sign up" />
            </form>
          </div>
        }
      </div>
    )
  }
}

export default VendorSignup