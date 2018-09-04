import React from 'react'
import '../dashboard.css'


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser
    };
  }


  render() {
    return (
      <div>
        <h1>Orders in Progress</h1>
        <div className='dash-grid'>
          <div>
            map(item =>
            {/*<MarketItem key={item.id} {...item} userType={this.state.userType} />*/}
            )}
          </div>
        </div>
      </div>
    )
  }

}

export default Dashboard;

