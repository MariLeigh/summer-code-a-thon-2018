import React, { Component } from 'react'
import { items, users } from './dummyData'


class MarketItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userType: props.userType,
      item: props
    }
    // this.requestItem = this.requestItem.bind(this)
  }

  render () {
    let retElm = []
    if (this.state.userType === 'donor' && this.item && this.item.requests) {
      this.item.requests.forEach(requester => {
        return users.filter(u => u.wallet === requester).forEach(user => {
          console.log(user.name);
          retElm.push(<span>{user.name}:{user.description}</span>)
        })
      })
    }
    return (
      <div className="item" key={this.state.item.id}>
          {this.state.userType === 'donor' && this.state.item.requests &&
            <div>{retElm}</div>
            }
        <div> {this.state.item.id} </div>
        <div> {this.state.item.item} </div>
        <div className="itemImage">
          <img src={this.state.item.itemUrl} alt="item:"></img>
        </div>
        <div> {this.state.item.description} </div>
      </div>
    )
  }
}

export default MarketItem