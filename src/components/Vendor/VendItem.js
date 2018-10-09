import React from 'react';
import '../Dash.css'


class VendItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props,
      itemDetails: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
  }


  toggleDetails(e) {
    if (e.target.className === 'fa fa-angle-down vendItem') this.setState({ itemDetails: true })
    if (e.target.className === 'fa fa-angle-up vendItem') this.setState({ itemDetails: false })
  }

  render() {
    return (
      <div>
        <div className="vendItem-content">
          {!this.state.itemDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-down vendItem"></i></div>
          }
          {this.state.itemDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-up vendItem"></i></div>
          }
          <div className="vendItem-name">{this.state.item.item}</div>
          {this.state.itemDetails &&
            <button id='edit-inventory'><i className="fa fa-edit"></i></button>
          }
        </div>
        { this.state.itemDetails &&
          <div className="component-content">
            <p>Price: {this.state.item.price}</p>
            <p>Quantity: {this.state.item.quantity}</p>
            <div className='item-img'>
              <img src={this.state.item.itemUrl} alt="item:"></img>
            </div>
            <p>Description: {this.state.item.description}</p>
          </div>
        }
      </div>
    )
  }
}

export default VendItem