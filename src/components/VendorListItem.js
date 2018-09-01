import React, { Component } from 'react'
import swarm from '../swarm';

class VendorListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vendor: props.currentUser,
      item: '',
      description: '',
      price: '',
      quantity: '',
      deliveryRadius: '',
      deliveryFee: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, event) {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit(event) {
    console.log('An item has been added to our marketplace: ' + JSON.stringify(this.state))
    event.preventDefault()
    // console.log(this.state);
    const file= JSON.stringify(this.state)
        const fileHash = swarm.upload(file)
        console.log("Uploaded file: Address: ", fileHash)
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
        }
      </div>
    )
  }
}

export default VendorListItem