import React, { Component } from 'react'
import VendorListItem from './VendorListItem'
import AddedItem from './AddedItem'
import { items } from '../dummyData'
import '../../css/vendor.css'

class Package extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorWallet: props.currentUser,
      web3: props.web3,
      addedItems: []
    }
    this.handleAdded = this.handleAdded.bind(this)
    // this.displayItems = this.displayItems.bind(this)
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
    // this.displayItems()
  }

  // displayItems() {
  //   for (let i = 0; i < this.state.addedItems.length; i++) {
  //     let addedItem = items.filter(i => i.id === this.state.addedItems[i])
  //     return addedItem
  //   }
  // }


  render() {

    return (
      <div>
        <div className="createPackageText">Create a packet of available groceries, specify how many it will feed in sub-info and describe typical package contents.</div>
        {/* <div className="addedItem">
          {this.displayItems().map(item =>
            <AddedItem key={item.id} {...item} />
          )}
        </div> */}
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