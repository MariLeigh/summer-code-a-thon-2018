import React, { Component } from 'react'
import { items, users } from './dummyData'


class MarketItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props
    }
    this.requestItem = this.requestItem.bind(this)

  }

  componentWillReceiveProps(nextProps) {
    this.setState(({item: nextProps}))
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

  render () {
    let retElm = []
    if (this.state.item.userType === 'donor' && this.item && this.item.requests) {
      this.item.requests.forEach(requester => {
        return users.filter(u => u.wallet === requester).forEach(user => {
          console.log(user.name);
          retElm.push(<span>{user.name}:{user.description}</span>)
        })
      })
    }
    return (
      <div className="item" key={this.state.item.id}>
          {this.state.item.userType === 'donor' && this.state.item.requests &&
            <div>{retElm}</div>
            }
        <div> {this.state.item.id} </div>
        <div> {this.state.item.item} </div>
        <div className="itemImage">
          <img src={this.state.item.itemUrl} alt="item:"></img>
        </div>
        <div> {this.state.item.description} </div>
        {this.state.item.userType === 'receiver' &&
          <div>
            <button value={this.state.item.id} onClick={this.requestItem}>Request Item</button>
          </div>}
      </div>
    )
  }
}

export default MarketItem