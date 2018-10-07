import React, { Component } from 'react'
import VendorListItem from './VendorListItem'
import '../../css/vendor.css'

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorWallet: props.currentUser,
      web3: props.web3,
      addedItems: [],
    }
    this.handleAdded = this.handleAdded.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      vendorWallet: nextProps.currentUser
    }))
  }

  handleAdded(added) {
    console.log('========')
    console.log(added)
    this.setState({ addedItems: added })
  }


  render() {
    return (
      <div>
        <div className="createPackageText">Create a packet of available groceries, specify how many it will feed in sub-info and describe typical package contents.</div>
        <div>
          <VendorListItem currentUser={this.props.currentUser}
            addUserInfo={this.addUserInfo}
            web3={this.state.web3}
            loginHandler={this.props.loginHandler}
            addedItems={this.handleAdded} />
        </div>
      </div>
    )
  }
}

export default Package