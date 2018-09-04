import React, { Component } from 'react'
import { items, users } from '../dummyData'
import './MarketItem.css'

class MarketItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: props,
      sponsorModal: false,
      requestModal: false,
      currentUser: props.currentUser
    }
    this.firstRequest = this.firstRequest.bind(this)
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
    this.setState({
      sponsorModal: true,
      selectedUser: users.filter(u => u.id === event.target.value)[0]
    })
  }
  firstRequest(event) {
    event.preventDefault()
    this.setState({ requestModal: true })
  }

  toggleModal(e) {
    if (e.target.className === 'sponsor-modal') this.setState({sponsorModal: false})
    if (e.target.className === 'request-modal') this.setState({requestModal: false})
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
    let addressElm = []
    for (let i = 0; i < users.length; i++) {
      if (users[i].wallet === this.props.currentUser) {
        if (users[i].name) { addressElm.push(<p>Name: {users[i].name}</p>)}
        if (users[i].address) { addressElm.push(<p>Address: {users[i].address}</p>)}
        if (users[i].address2) { addressElm.push(<p>Address2: {users[i].address2}</p>)}
        if (users[i].zipcode) { addressElm.push(<p>Zip Code: {users[i].zipcode}</p>)}
        if (users[i].city) { addressElm.push(<p>City: {users[i].city}</p>)}
        if (users[i].country) { addressElm.push(<p>Country: {users[i].country}</p>)}
      }
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
            <button value={this.state.item.id} onClick={this.firstRequest}>Request Item</button>
          </div>
        }
        {this.state.requestModal &&
          <div className='request-modal' onClick={this.toggleModal}>
            <div>
              <h2>Request for:</h2>
              <p>Item: {this.state.item.item} </p>
              <p>Description: {this.state.item.description} </p>
              <h3>Delivery address:</h3>
              { addressElm }
              <h3>Reminder: Must confirm delivery</h3>
              <div>
                <button value={this.state.item.id} onClick={this.requestItem}>Submit</button>
              </div>
            </div>
          </div>
        }
        {this.state.item.userType === 'donor' && this.state.item.requests &&
          <div>
            <div> Price: {this.state.item.price} USD </div>
            <div>{retElm}</div>
          </div>
        }
        {this.state.sponsorModal &&
          <div className='sponsor-modal' onClick={this.toggleModal}>
            <div>
              <h2>Confirm purchase:</h2>
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