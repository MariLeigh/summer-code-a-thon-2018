import React, {Component} from 'react';
import {users} from '../dummyData';
import {withRouter} from "react-router-dom";

class DonorSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      type: ['d'],
      validAccounts: this.props.validAccounts,
      wallet: this.props.currentUser,
      name: '',
      //   donorWallet: ''
    };
    this.setUserType = props.setUserType;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      currentUser: nextProps.currentUser,
      wallet: nextProps.currentUser,
      // donorWallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    // console.log('A donor account was submitted: ' + JSON.stringify(this.state))
    event.preventDefault();
    // if (!this.state.wallet) {
    //   alert("Your metamask account is not signed in, unable to add user.")
    //   return
    // }
    let validAccount = false;
    for (let i = 0; i < this.state.validAccounts.length; i++) {
      if (this.state.validAccounts[i] === this.state.wallet) {
        validAccount = true;
        console.log("This is a valid account.");
      }
    }
    if (!validAccount) {
      console.log("You can't use this account number. Make sure to import this account into your MetaMask wallet first.")
      this.setState({ invalidAcctMsg: true })
      return
    }
    let match = false;
    const updates = {};
    if (this.state.type) updates.type = this.state.type;
    if (this.state.wallet) updates.wallet = this.state.wallet;
    //if (this.state.donorWallet) updates.donorWallet = this.state.donorWallet;
    if (this.state.name) updates.name = this.state.name;
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.state.wallet) {
        users[i] = Object.assign(users[i], updates);
        match = true
      }
    }
    if (!match) {
      updates.wallet = this.state.wallet;
      updates.id = users.length + 1;
      users[users.length] = updates;
    }
    this.props.loginHandler(this.state.wallet);
    this.props.history.push('/donate');
    // window.location = '/market?type=d'
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.state.invalidAcctMsg &&
              <div className="invalidMsg">
                Something went wrong. Is your Ethereum account address correct? Is Metamask connected?
              </div>
            }
            <label>
              Name:
                <input type="text"
                value={this.state.name}
                onChange={(e) => this.handleChange('name', e)}
              />
            </label>
            <label>
              Email address:
                <input type="text"
                value={this.state.email}
                onChange={(e) => this.handleChange('email', e)}
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
              <input className="acc-text-box" type="text"
                     value={this.state.wallet}
                     onChange={(e) => this.handleChange('wallet', e)}
              />
            </label>
            <input type="submit" className='form-btn' value="Sign up" />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(DonorSignup)