import React, { Component } from 'react'
import './Market.css'
import {items, users} from './dummyData'

class Market extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser,
      userType: 'receiver'
    }

    this.requestItem = this.requestItem.bind(this)
    this.setUserType = this.setUserType.bind(this)
  }

requestItem(event) {
  event.preventDefault()
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === event.target.value) {
      if (items[i].requests) {
        items[i].requests.push(this.props.currentUser)
      } else {
        items[i].requests = this.props.currentUser
      }
    }
  }
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
        <button className="w3-bar-item w3-button" onClick={() => this.setUserType('receiver')}>Receiver</button>
        <button className="w3-bar-item w3-button" onClick={() => this.setUserType('donor')}>Donate</button>
      </div>

      {this.state.userType === 'receiver' &&
        <div>
          <h2> Browse all available items and choose one to request </h2>
          <p>
            Once you receive (and confirm receipt!) of your item, you'll be able to come back and request again
          </p>
        </div>
      }
      <div className="grid">
        {items.map(item =>
          <div className="item" key={item.id}>
            <div> {item.id} </div>
            <div> {item.item} </div>
            <div className="itemImage">
              <img src={item.itemUrl} alt="item:"></img>
            </div>
            <div> {item.description} </div>
            {this.state.userType === 'receiver' &&
              <div>
                <button value={item.id} onClick={this.requestItem}>Request Item</button>
              </div>
          }
          </div>
        )}
      </div>
      </div>
    )
  }
}

export default Market