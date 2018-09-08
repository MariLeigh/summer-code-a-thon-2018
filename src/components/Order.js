import React from 'react';
import './Dash.css'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props
    }
    this.acceptOrder = this.acceptOrder.bind(this)
    this.orderShipped = this.orderShipped.bind(this)
  }

  acceptOrder() {
    this.state.order.updateOrder(this.state.order, 'toShip');
  }
  orderShipped() {
    this.state.order.updateOrder(this.state.order, 'shipped');
  }

  render() {
    return (
      <div>
        <div className='order-item'>
          <div className='item-name'>
            {this.state.order.item.item}
          </div>
          <div className='order-price'>
            {this.state.order.item.price}
          </div>
          <div className='receiver-name'>
            {this.state.order.receiver.name}
          </div>
          <div className='receiver-city'>
            {this.state.order.receiver.city}
          </div>
          <div className='receiver-state'>
            {this.state.order.receiver.state}
          </div>
          <div className='init-date'>
            {this.state.order.initDate}
          </div>
          {this.state.order.status === 'init' &&
            <div><button onClick={() => this.acceptOrder()}>Accept</button></div>
          }
          {this.state.order.status === 'toShip' &&
            <div><button onClick={() => this.orderShipped()}>Shipped</button></div>
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
      </div>
    )
  }
}

export default Order