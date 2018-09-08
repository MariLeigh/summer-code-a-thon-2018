import React from 'react'
import '../Dash.css'
import { items, users, orders } from '../dummyData'
import DashItem from '../DashItem'
import Order from '../Order'

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      userType: props.userType,
      userOrders: orders
    };
    this.userInfo = this.userInfo.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.getOrders = this.getOrders.bind(this);
    this.getShippedOrders = this.getShippedOrders.bind(this);
  }

  userInfo() {
    return users.filter((user) => user.wallet === this.state.currentUser)[0];
  }

  componentWillMount() {
    // const idArr1 = this.userInfo().in_progress_items;
    // const idArr2 = this.userInfo().completed_items;
    // this.setState({ inProgressItems: this.searchItems(idArr1) });
    // this.setState({ completedItems: this.searchItems(idArr2) });
  }

  searchItems(array) {
    // let result = [];
    // for (let i = 0; i < array.length; i++) {
    //   items.forEach((item) => {
    //     if (array[i] === item.id) {
    //       result.push(item);
    //     }
    //   })
    // }
    // return result;
  }
  updateOrder(o, type) {
    let temp = this.state.userOrders;
    temp[o.id-1].status = type;
    this.setState({userOrders: temp})
  }

  getOrders(type) {
    return this.state.userOrders.filter(o => o.vendorWallet === this.state.currentUser && o.status === type)
  }
  getShippedOrders() {
    return this.state.userOrders.filter(o => o.vendorWallet === this.state.currentUser
      && (o.status === 'shipped'
      || o.status === 'received'
      || o.status === 'complete'))
  }

  render() {

    // let withdrawNum = [{item:{price:0}}]
    // withdrawNum = withdrawNum.concat(this.getOrders('received'))
    // withdrawNum = withdrawNum.reduce((t, o) => {
    //   console.log(t, o)
    //   let tempVal = o.item.price !== ""
    //     ? parseInt(o.item.price.replace("$", ""))
    //     : 0
    //     console.log(tempVal)
    //   return t + tempVal
    // })
    // console.log(withdrawNum);

    let vendItems = []
    for (let i=0; i<items.length; i++) {
      if (items[i].vendorWallet === this.state.currentUser) {
        vendItems.push(items[i])
      }
    }

    return (
      <div>
        <script src="https://use.fontawesome.com/ac442f7ad2.js"></script>
        <h1 className='pageTitle'>Dashboard</h1>
        <h2>Action Items</h2>
        <div className='dash-container'>
          <div className='dash-component'>
            <h3>Orders Available to Accept</h3>
            <div>
            {this.getOrders('init').map(order =>
              <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
            )}
            </div>
          </div>
          <div className='dash-component'>
            <h3>Orders to Assemble and Ship</h3>
            <div>
              {this.getOrders('toShip').map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder} />
              )}
            </div>
          </div>
          <div className='dash-component'>
            <h3>Update Inventory<button id='edit-inventory'><i className="fa fa-edit"></i></button></h3>
            <div className='component-content'>
              {vendItems.map((item) =>
                <div>
                  <p>Name: {item.item}</p>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className='item-img'>
                    <img src={item.itemUrl} alt="item:"></img>
                  </div>
                  <p>Description: {item.description}</p>
                </div>
              )
            }
            </div>
          </div>
        </div>
        <h2>Order History and Revenue</h2>
        <div className='dash-container'>
          <div className='dash-component'>
            <h3>Revenue</h3>
            <div className='component-content rev'>
              <p>Ready to withdraw:</p>
              <p className='dollar'>$150
                <span>
                  <a className='transfer-link' href=''>transfer now</a>
                </span>
              </p>
              {/* <h1>{withdrawNum}</h1> */}
              <p>Total Revenue:</p>
              <p className='dollar'>${this.getOrders('complete')
              .reduce((t,o) => t + o.item.price !== ""
              ? parseInt(o.item.price.replace("$",""))
              : 0
            )}</p>
              {/* <h1>$50</h1> */}
            <p>Grocery packets delivered:</p>
            <p>{this.getShippedOrders().length}</p>

            </div>
          </div>
          <div className='dash-component order-status'>
            <h3>Orders status</h3>
            <div>
              {this.getShippedOrders().map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Dashboard;

