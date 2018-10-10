import React, {Component} from 'react'
import {users} from '../dummyData'
import {withRouter} from "react-router-dom";

class VendorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      validAccounts: this.props.validAccounts,
      name: '',
      wallet: this.props.currentUser,
      address: '',
      address2: '',
      zipcode: '',
      city: '',
      country: '',
      email: ''
      //vendorWallet: this.props.currentUser
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      wallet: nextProps.currentUser,
      currentUser: nextProps.currentUser,
      validAccounts: nextProps.validAccounts
      //   vendorWallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({[key]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log('A vendor account was submitted: ' + JSON.stringify(this.state))
    let validAccount = false;
    for (let i = 0; i < this.state.validAccounts.length; i++) {
      if (this.state.validAccounts[i] === this.state.wallet) {
        validAccount = true;
        console.log("This is a valid account.");
      }
    }
    if (!validAccount) {
      console.log(this.state)
      console.log("You can't use this account number. Make sure to import this account into your MetaMask wallet first.")
      return
    }
    let match = false;
    const updates = {};
    if (this.state.wallet) updates.wallet = this.state.wallet;
    // if (this.state.vendorWallet) updates.vendorWallet = this.state.vendorWallet;
    if (this.state.name) updates.name = this.state.name;
    if (this.state.address) updates.address = this.state.address;
    if (this.state.address2) updates.address2 = this.state.address2;
    if (this.state.zipcode) updates.zipcode = this.state.zipcode;
    if (this.state.city) updates.city = this.state.city;
    if (this.state.country) updates.country = this.state.country;
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.state.wallet) {
        users[i] = Object.assign(users[i], updates);
        match = true
      }
    }
    if (!match) {
      updates.wallet = this.state.wallet;
      updates.id = users.length + 1;
      users[users.length] = updates
    }
    this.props.loginHandler(this.state.wallet);
    this.props.history.push('/v/listitem');
  }

  render() {
    return (
      <div>
          <div>
            <form onSubmit={this.handleSubmit}>

              <label>
                Name
              </label>
              <input type="text"
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e)}
              />
              <label>
                Email
              </label>
              <input type="text"
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e)}
              />
              {/* <label>
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
              </label> */}
              <label>
                Country
              </label>
              <input type="text"
                value={this.state.country}
                onChange={(e) => this.handleChange('country', e)}
              />
              <label>
                Ethereum account
              </label>
              <input className="acc-text-box" type="text"
                       value={this.state.wallet}
                       onChange={(e) => this.handleChange('wallet', e)}
              />
              <input type="submit" className='primary-btn form-btn' value="List Available Items" />
            </form>
          </div>
      </div>
    )
  }
}

export default withRouter(VendorSignup);