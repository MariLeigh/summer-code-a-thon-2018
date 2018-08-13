import React, { Component } from 'react'

class VendorListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vendor: this.props.address,
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
    this.props.nextStep()
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
            <input type="submit" value="Submit" />
          </form>
        </div>
        }
      </div>
    )
  }
}

export default VendorListItem