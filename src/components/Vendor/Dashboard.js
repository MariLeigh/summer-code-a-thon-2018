import React from 'react'
import '../Dash.css'
import {items, orders, users} from '../dummyData'
import Order from '../Order'
import VendItem from './VendItem'

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
    temp[o.id - 1].status = type;
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
    for (let i = 0; i < items.length; i++) {
      if (items[i].vendorWallet === this.state.currentUser) {
        vendItems.push(items[i])
      }
    }

    return (
      <div>
        <script src="https://use.fontawesome.com/ac442f7ad2.js"></script>
        {/* <h1 className='pageTitle'>Dashboard</h1> */}
        <div className="announcements"></div>
        <div className="dash-user">
          <div className="dash-user-img-div"><img className="dash-user-icon" src={require("../../images/user_icon.png")}></img></div>
          <div className="dash-user-info">
            <div className="dash-user-name">Goods.inc</div>
            Member since August 17, 2018
          </div>
          <div className="dash-mission-statement">Goods.inc mission is to provide locally sourced organic foods and supplies for communities across the United States.</div>
        </div>
        <div className="dash-back">
        <div className="dash-title in">Action Items</div>
        <div className='dash-container'>
          <div className='dash-component accept'>
            <h3 className="fin-title">Approvals</h3>
            <div>
              {this.getOrders('init').map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
              )}
            </div>
          </div>
          <div className='dash-component toShip'>
              <h3 className="fin-title">Assemble and ship</h3>
            <div>
              {this.getOrders('toShip').map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
              )}
            </div>
          </div>
          <div className='dash-component inventory'>
            <h3 className="fin-title">Items in marketplace
            </h3>
            <div>
              {vendItems.map((item) =>
                <VendItem key={item.id} {...item} />
              )}
            </div>
          </div>
        </div>
        <div className="dash-title in">Order History and Revenue</div>
        <div className='dash-container'>
          <div className='dash-component revenue'>
              <h3 className="fin-title">Revenue</h3>
            <div className='component-content rev'>
              <div className="component-el">Grocery packets delivered:</div>
              <div className="dollar component-el fin-title">{this.getShippedOrders().length}</div>
              <div className="component-el">Available balance:</div>
              <div className='dollar component-el fin-title'>$150
                {/* <span>
                  <a className='transfer-link' href=''>transfer now</a>
                </span> */}
              </div>
              <div className="transfer-btn component-el">Transfer to my account</div>
              {/* <h1>{withdrawNum}</h1> */}
              {/* <div className="component-el">Total Revenue:</div> */}
              {/* <p className='dollar'>${this.getOrders('complete')
                .reduce((t, o) => t + o.item.price !== ""
                  ? parseInt(o.item.price.replace("$", ""))
                  : 0
                )}</p> */}
              {/* <h1>$50</h1> */}
              {/* <div className="component-el">$50</div> */}

            </div>
          </div>
          <div className='dash-component order-status'>
              <h3 className="fin-title">Delivery status</h3>
            <div>
              {/* <div className="order-item date-labels">
                <div></div>
                <div></div>
                <div>Shipped</div>
                <div>Received</div>
                <div>Payment processed</div>
              </div> */}
              {this.getShippedOrders().map(order =>
                <Order key={order.id} {...order} updateOrder={this.updateOrder}/>
              )}
            </div>
          </div>
        </div>
        {/* <div className="dash-fill-bottom"></div> */}
        </div>
      </div>
    )
  }

}

export default Dashboard;

