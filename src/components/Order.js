import React from 'react';
import './Dash.css'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props,
      receiverDetails: false
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
    if (e.target.className === 'fa fa-angle-down receiver') this.setState({ receiverDetails: true })
    if (e.target.className === 'fa fa-angle-up receiver') this.setState({ receiverDetails: false })
  }

  render() {
    return (
      <div>
        <div className='order-item'>
          { !this.state.receiverDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-down receiver"></i></div>
          }
          { this.state.receiverDetails &&
            <div className="expand-arrow"><i onClick={this.toggleDetails} className="fa fa-angle-up receiver"></i></div>
          }

          <div className='item-name'>
            {this.state.order.item.item}
          </div>
          {this.state.order.status === 'init' &&
          <div>
            <div className="small-pri-btn" onClick={() => this.acceptOrder()}>Accept</div>
          </div>
          }
          {this.state.order.status === 'init' &&
          <div>
            <div className="small-sec-btn">Deny</div>
          </div>
          }
          {this.state.order.status === 'toShip' &&
          <div>
            {/* <input placeholder='confirmation #'></input> */}
            <div className="small-pri-btn conf" onClick={() => this.orderShipped()}>Shipped</div>
          </div>
          }
          {this.state.order.status === 'shipped' &&
            <div className="status-type">
              Awaiting delivery confirmation
            </div>
          }
          {this.state.order.status === 'received' &&
            <div className="status-type">
              Funds available <btn className="sml-fin-btn">Collect payment</btn>
            </div>
          }
          {this.state.order.status === 'complete' &&
            <div className="status-type">
              Paid
            </div>
          }
        </div>
        { this.state.receiverDetails &&
          <div className="receiver-details">
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
            <div>
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
        }
      </div>
    )
  }
}

export default Order