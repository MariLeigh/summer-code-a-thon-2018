import React from 'react';
import './Dash.css'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props,
      itemDetails: false
    }
    this.acceptOrder = this.acceptOrder.bind(this)
    this.orderShipped = this.orderShipped.bind(this)
    this.toggleDetails = this.toggleDetails.bind(this)
  }

  acceptOrder() {
    this.state.order.updateOrder(this.state.order, 'toShip');
  }

  orderShipped() {
    this.state.order.updateOrder(this.state.order, 'shipped');
  }

  toggleDetails(e) {
    if (e.target.className === 'fa fa-angle-down') this.setState({ itemDetails: true })
    if (e.target.className === 'fa fa-angle-up') this.setState({ itemDetails: false })
  }

  render() {
    return (
      <div>
        <div className='order-item'>
          { !this.state.itemDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-down"></i></div>
          }
          { this.state.itemDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-up"></i></div>
          }

          <div className='item-name'>
            {this.state.order.item.item}
          </div>
          {this.state.order.status === 'init' &&
          <div>
            <button onClick={() => this.acceptOrder()}>Accept</button>
          </div>
          }
          {this.state.order.status === 'toShip' &&
          <div><input placeholder='confirmation #'></input>
            <button onClick={() => this.orderShipped()}>Shipped</button>
          </div>
          }
          {this.state.order.shippedDate &&
          <div>Shipped: {this.state.order.shippedDate}</div>
          }
          {this.state.order.receivedDate &&
          <div>Received: {this.state.order.receivedDate}</div>
          }
          {this.state.order.payDate &&
          <div>Payment processed: {this.state.order.payDate}</div>
          }
        </div>
        { this.state.itemDetails &&
          <div className="item-details">
            <div className="detail-grid">
              <div className='receiver-name'>
                {this.state.order.receiver.name}
              </div>
              <div className='order-price'>
                {this.state.order.item.price}
              </div>
              <div className='init-date'>
                {this.state.order.initDate}
              </div>
            </div>
            <div className='receiver-address'>
              {this.state.order.receiver.address}
            </div>
            <div className='receiver-address2'>
              {this.state.order.receiver.address2}
            </div>
            <div className='receiver-location'>
              {this.state.order.receiver.city}, {this.state.order.receiver.state}, {this.state.order.receiver.zipcode}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Order