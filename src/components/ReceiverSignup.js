import React, { Component } from 'react'

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

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    console.log('A receiver account was submitted: ' + JSON.stringify(this.state))
    event.preventDefault()
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
        }
      </div>
    )
  }
}

export default ReceiverSignup