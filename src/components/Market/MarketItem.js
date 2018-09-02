import React, { Component } from 'react'
import { items, users } from '../dummyData'
import './MarketItem.css'

class MarketItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props,
      modal: false
    }
    this.requestItem = this.requestItem.bind(this)
    this.sponsorItem = this.sponsorItem.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
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

  sponsorItem(event) {
    event.preventDefault()
    console.log(event.target)
    this.setState({
      modal: true,
      selectedUser: users.filter(u => u.id === event.target.value)[0]
    })
  }
  toggleModal(e) {
    console.log(e.target.className)
    if (e.target.className === 'sponsor-modal') this.setState({modal: false})
  }

  render () {
    let retElm = []
    if (this.state.item.userType === 'donor' && this.state.item.requests) {
      this.state.item.requests.forEach(requester => {
        return users.filter(u => u.wallet === requester).forEach(user => {
          retElm.push(<div key={user.id}>
            <span>{user.name}</span>:
            <span>{user.description}</span>
            <button value={user.id} onClick={this.sponsorItem}>Buy for {user.name}</button>
          </div>)
        })
      })
    }
    return (
      <div className="item" key={this.state.item.id}>
        <div> {this.state.item.id} </div>
        <div> {this.state.item.item} </div>
        <div className="itemImage">
          <img src={this.state.item.itemUrl} alt="item:"></img>
        </div>
        <div> {this.state.item.description} </div>
        {this.state.item.userType === 'receiver' &&
          <div>
            <button value={this.state.item.id} onClick={this.requestItem}>Request Item</button>
          </div>
        }
        {this.state.item.userType === 'donor' && this.state.item.requests &&
          <div>
            <div> Price: {this.state.item.price} USD </div>
            <div>{retElm}</div>
          </div>
        }
        {this.state.modal &&
          <div className='sponsor-modal' onClick={this.toggleModal}>
            <div>
              <h4>Confirm purchase:</h4>
              <p>Item: {this.state.item.item}</p>
              <p>Recipient: {this.state.selectedUser.name}</p>
              <p>Price: {this.state.item.price}</p>
              <p>Disclaimer: Once you confirm this purchase, a smart contract will be initiated and the price will be held in escrow.</p>
              <div>
                <input type="checkbox" />I accept terms and conditions
              </div>
              <button onClick={this.confirmSponsor}>Submit</button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MarketItem