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
    return (
      <div>
        <h1 className='pageTitle'>Dashboard</h1>
        <div className='dash-container'>
          <h1>Action Items</h1>
          <div className='dash-component'>
            <h2>Orders Available to Accept</h2>
            <div>
            {this.getOrders('init').map(order =>
              <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
            )}
            </div>
          </div>
          <div className='dash-component'>
            <h2>Orders to Assemble and Ship</h2>
            <div>
              {this.getOrders('toShip').map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder} />
              )}
            </div>
          </div>
          <div className='dash-component'>
            <h2>Update Inventory</h2>
          </div>
        </div>
        <div className='dash-container'>
          <h1>Order History and Revenue</h1>
          <div className='dash-component'>
            <h2>Revenue</h2>
            <div>
              <h3>Grocery packets delivered:</h3>
              <h1>{this.getShippedOrders().length}</h1>
              <h3>Ready to withdraw</h3>
              <h1>$150</h1>
              {/* <h1>{withdrawNum}</h1> */}
              <h3>Total Revenue</h3>
              <h1>{this.getOrders('complete')
              .reduce((t,o) => t + o.item.price !== ""
                ? parseInt(o.item.price.replace("$",""))
                : 0
              )}</h1>
              {/* <h1>$50</h1> */}

            </div>
          </div>
          <div className='dash-component'>
            <h2>Orders status</h2>
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

