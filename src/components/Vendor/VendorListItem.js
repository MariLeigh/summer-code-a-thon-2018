import React, { Component } from 'react'
import swarm from '../../swarm';
import { items } from '../dummyData'

class VendorListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vendorWallet: props.currentUser,
      item: '',
      description: '',
      price: '',
      photoUrl: '',
      quantity: '',
      deliveryRadius: '',
      deliveryFee: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      vendorWallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (!this.state.vendorWallet) {
      alert("Your metamask account is not signed in, item not added.")
      return
    }
    let newItem = {}
    if (this.state.vendorWallet) newItem.vendorWallet = this.state.vendorWallet
    if (this.state.item) newItem.item = this.state.item
    if (this.state.description) newItem.description = this.state.description
    if (this.state.price) newItem.price = this.state.price
    if (this.state.photoUrl) newItem.photoUrl = this.state.photoUrl
    if (this.state.quantity) newItem.quantity = this.state.quantity
    if (this.state.deliveryRadius) newItem.deliveryRadius = this.state.deliveryRadius
    if (this.state.deliveryFee) newItem.deliveryFee = this.state.deliveryFee
    newItem.id = items.length
    items[items.length] = newItem
    // console.log('An item has been added to our marketplace: ' + JSON.stringify(this.state))
    // event.preventDefault()
    // console.log(this.state);
    // const file= JSON.stringify(this.state)
    //     const fileHash = swarm.upload(file)
    //     console.log("Uploaded file: Address: ", fileHash)
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Item:
                <input type="text"
                value={this.state.item}
                onChange={(e) => this.handleChange('item', e)}
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
              Price:
                <input type="text"
                value={this.state.price}
                onChange={(e) => this.handleChange('price', e)}
              />
            </label>
            <label>
              Image URL:
                <input type="text"
                value={this.state.photoUrl}
                onChange={(e) => this.handleChange('photoUrl', e)}
              />
            </label>
            <label>
              Quantity:
                <input type="text"
                value={this.state.quantity}
                onChange={(e) => this.handleChange('quantity', e)}
              />
            </label>
            <label>
              Delivery distance:
                <input type="text"
                value={this.state.deliveryRadius}
                onChange={(e) => this.handleChange('deliveryRadius', e)}
              />
            </label>
            <label>
              Delivery Fee:
                <input type="text"
                value={this.state.deliveryFee}
                onChange={(e) => this.handleChange('deliveryFee', e)}
              />
            </label>
            <input type="submit" value="Add Item" />
          </form>
        </div>
      </div>
    )
  }
}

export default VendorListItem