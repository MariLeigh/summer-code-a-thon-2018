import React from 'react'
import '../Dash.css'
import {items, users} from '../dummyData'
import DashItem from '../DashItem'


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      inProgressItems: '',
      completedItems: ''
    };
    this.userInfo = this.userInfo.bind(this);
  }

  userInfo() {
    return users.filter((user) => user.wallet === this.state.currentUser)[0];
  }

  componentWillMount() {
    const idArr1 = this.userInfo().in_progress_items;
    const idArr2 = this.userInfo().completed_items;
    this.setState({inProgressItems: this.searchItems(idArr1)});
    this.setState({completedItems: this.searchItems(idArr2)});
  }

  searchItems(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      items.forEach((item) => {
        if (array[i] === item.id) {
          result.push(item);
        }
      })
    }
    return result;
  }

  render() {
    return (
      <div>
        <h1 className='pageTitle'>Dashboard</h1>
        <h1>Order in Progress</h1>
        <div className="dash-grid">
          {this.state.inProgressItems.map(item =>
            <DashItem key={item.id} {...item} userType={this.props.userType} section="inProcess"/>
          )}
        </div>
        <h1>Completed Orders</h1>
        <div className='dash-grid'>
          {this.state.completedItems.map((item, index) =>
            <DashItem key={index} {...item} userType={this.props.userType} section="completed"/>
          )}
        </div>
      </div>
    )
  }

}

export default Dashboard;

