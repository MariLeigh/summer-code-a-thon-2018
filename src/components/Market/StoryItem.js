import React, { Component } from 'react'
import { items, users } from '../dummyData'
import './MarketItem.css'

class StoryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props,
      sponsorModal: false,
      requestModal: false,
      requesterList: false,
      currentUser: props.currentUser
    }
    this.firstRequest = this.firstRequest.bind(this)
    this.requestItem = this.requestItem.bind(this)
    this.sponsorItem = this.sponsorItem.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({ story: nextProps }))
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
    if (e.target.className === 'sponsor-modal') this.setState({ sponsorModal: false })
    if (e.target.className === 'request-modal') this.setState({ requestModal: false })
    if (e.target.className === 'requester-list') this.setState({ requesterList: !this.state.requesterList })
    if (e.currentTarget.className === 'item' && this.state.requesterList === false) this.setState({ requesterList: true })
  }

  render() {

    let requestingUser = users.filter(u => u.wallet === this.state.story.requester)
    let requestedItem = items.filter(i => i.id === this.state.story.itemId)

    return (
      <div className="story-item" key={this.state.story.id} onClick={this.toggleModal}>
        <div className="itemImage">
          <img className="story-user-icon" src={require("../../images/user_icon.png")} alt="item:"></img>
        </div>
        <div className="itemInfo">
          <div className="head">
            <div> {requestingUser[0].name} </div>
          </div>
          <div className="top">
            <div>Requests:</div>
            <div> {this.state.story.itemName} </div>
          </div>
          <div>
            {requestingUser[0].description}
          </div>
          <div className="foot">
            <div> Partner: {requestedItem[0].vendorName} </div>
            <div> Cost: {requestedItem[0].price} USD</div>
          </div>
        </div>
        {this.state.requestModal &&
          <div className='request-modal' onClick={this.toggleModal}>
            <div>
              <h2>Request for:</h2>
              <p>Item: {this.state.item.item} </p>
              <p>Description: {this.state.item.description} </p>
              <h3>Delivery address:</h3>
              {/* {addressElm} */}
              <h3>Reminder: Must confirm delivery</h3>
              <div>
                <button value={this.state.item.id} onClick={this.requestItem}>Submit</button>
              </div>
            </div>
          </div>
        }
        {this.state.userType === 'd' &&
          <div>
            {/* <div> Price: {this.state.item.price} USD </div> */}
            <div className='requester-list-div'>
              {/* <button className='requester-list'>Requests for this item ({retElm.length})</button> */}
            </div>
            {/* {this.state.requesterList &&
              <div>{retElm}</div>
            } */}
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

export default StoryItem