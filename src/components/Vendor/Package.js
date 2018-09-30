import React, { Component } from 'react'
import VendorListItem from './VendorListItem'
import '../../css/vendor.css'

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorWallet: props.currentUser,
      web3: props.web3
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      vendorWallet: nextProps.currentUser
    }))
  }

  render() {
    return (
      <div>
        <div className="createPackageText">Create a packet of available groceries, specify how many it will feed in sub-info and describe typical package contents.</div>
        <div className="createPacket">
          <VendorListItem currentUser={this.props.currentUser}
            addUserInfo={this.addUserInfo}
            web3={this.state.web3} />
        </div>
      </div>
    )
  }
}

export default Package