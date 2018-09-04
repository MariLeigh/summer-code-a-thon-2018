import React, { Component } from 'react'
import queryString from 'query-string'
import MarketItem from './MarketItem'
import './Market.css'
import {items, users} from '../dummyData'

class Market extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser,
      userType: props.userType
    }
    this.setUserType = this.setUserType.bind(this)
    this.displayItems = this.displayItems.bind(this)
  }

  componentDidMount() {
    const query = queryString.parse(location.search)
    if (query.type) this.setUserType(query.type)
  }

  displayItems() {
    if (this.state.userType === 'donor') return items.filter(i => i.requests)
    return items
  }
  setUserType(type) {
    this.setState(() => {
      return {userType: type}
    })
  }

  render() {

    return (
      <div>
      <h1> Marketplace </h1>
      <div className="w3-bar w3-black">
        <button className="w3-bar-item w3-button" onClick={() => this.setUserType('')}>View all</button>
        <button className="w3-bar-item w3-button" onClick={() => this.setUserType('receiver')}>Make a Request</button>
        <button className="w3-bar-item w3-button" onClick={() => this.setUserType('donor')}>Be a Sponsor</button>
      </div>

      {this.state.userType === 'receiver' &&
        <div>
          <h2> Browse all available items and choose one to request </h2>
          <p>
            Once you receive (and confirm receipt!) of your item, you'll be able to come back and request again
          </p>
        </div>
      }
      {this.state.userType === 'donor' &&
        <div>
          <h2> Browse all requests and select who to help </h2>
          <p>
            Once you confirm sponsoring an item for a recipient, the amount will be held in escrow until the item is delivered.
          </p>
        </div>
      }
      <div className="grid">
        {this.displayItems().map(item =>
          <MarketItem key={item.id} {...item} userType={this.state.userType} currentUser={this.props.currentUser} />
        )}
      </div>
      </div>
    )
  }
}

export default Market