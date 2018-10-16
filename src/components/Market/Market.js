import React, {Component} from 'react'
import MarketItem from './MarketItem'
import './Market.css'
import {items} from '../dummyData'
import '../Dash.css'
import queryString from 'query-string'
import {withRouter} from 'react-router-dom';

class Market extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: props.currentUser,
      userType: props.userType
    };
    this.setUserType = this.setUserType.bind(this);
    this.displayItems = this.displayItems.bind(this);
    this.setUserType = this.setUserType.bind(this);
    this.displayItems = this.displayItems.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      currentUser: nextProps.currentUser
    }))
  }

  componentDidMount() {
    const query = queryString.parse(window.location.search);
    if (query.type && !this.state.userType) this.setUserType(query.type)
  }

  displayItems() {
    if (this.state.userType === 'd') return items.filter(i => i.requests);
    return items
  }

  setUserType(type) {
    this.setState(() => {
      return {userType: type}
    })
  }

  goToDashboard() {
    this.state.userType === 'r' ? this.props.history.push('r/dash') :
      this.state.userType === 'd' ? this.props.history.push('d/dash') :
        this.props.history.push('v/dash');
  }

  render() {
    return (
      <div>
        <div className="explore-msg">
          {this.state.userType === ['v'] &&
            <p>Thanks for adding to the marketplace! Explore your dashboard</p>
          }
        </div>
        <div className="market-container">
          {/* <button className='dash-B' onClick={this.goToDashboard}>Dashboard</button> */}
          <h1 className="exploreTitle"> Explore marketplace </h1>
          <div className="w3-bar w3-black">
            {/* <button className="w3-bar-item w3-button" onClick={() => this.setUserType('')}>View all</button>
            <button className="w3-bar-item w3-button" onClick={() => this.setUserType('r')}>Make a Request</button>
            <button className="w3-bar-item w3-button" onClick={() => this.setUserType('d')}>Be a Sponsor</button> */}
          </div>
          <div className='market'>
          {this.state.userType === 'r' &&
          <div>
            <h2> Browse all available items and choose one to request </h2>
            <p>
              Once you receive (and confirm receipt!) of your item, you'll be able to come back and request again
            </p>
          </div>
          }
          {this.state.userType === 'd' &&
          <div>
            <h2> Browse all requests and select who to help </h2>
            <p>
              Once you confirm sponsoring an item for a recipient, the amount will be held in escrow until the item is
              delivered.
            </p>
          </div>
          }
          <div className="grid">
            {this.displayItems().map(item =>
              <MarketItem key={item.id} {...item} userType={this.state.userType} currentUser={this.props.currentUser}/>
            )}
          </div>
          </div>
        </div>
        <div className="fill-footer"></div>
      </div>
    )
  }
}

export default withRouter(Market);