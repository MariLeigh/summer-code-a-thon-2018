import React, { Component } from 'react'

class AddedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState(({ item: nextProps }))
  }

  render() {
    return (
      <div>
        <div className="item" key={this.state.item.id} onClick={this.toggleModal}>
          <div className="itemImage">
            <img src={this.state.item.itemUrl} alt="item:"></img>
          </div>
          <div className="itemInfo">
            <div className="head">
              <div> {this.state.item.item} </div>
            </div>
            <div className="top">
              <div> {this.state.item.subInfo} </div>
              <div> {this.state.item.description} </div>
            </div>
            <div className="foot">
              <div> Partner: {this.state.item.vendorName} </div>
              <div> Cost: {this.state.item.price} USD</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddedItem