import React from 'react';
import './Dash.css'


class DashItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props
    }
  }

  render() {
    return (
      <div>
        {this.props.type === 'inProcess' && <div className='dash-Item'>
          <img src={this.state.item.itemUrl} className='dash-img' alt="item-notebook"/>
          <div className='description'>
            <h5><span className="propertyName">Item: </span> {this.state.item.item}</h5>
            <h5><span className="propertyName">Ship Date: </span> Sep. 2</h5>
            <h5><span className="propertyName">Delivery Estimate: </span> Between 2 to 3 days</h5>
          </div>
          <button className="conformation-B"> Confirm Delivery</button>
        </div>}
        {this.props.type === 'completed' && <div className='dash-Item'>
          <img src={this.state.item.itemUrl} className='dash-img' alt="item-notebook"/>
          <div className='description'>
            <h5><span className="propertyName">Item: </span> {this.state.item.item}</h5>
            <h5><span className="propertyName">price: </span> {this.state.item.price}</h5>
            <h5><span className="propertyName">Delivered: </span> Aug. 23 2018</h5>
          </div>
        </div>}
      </div>
    );
  }
}

export default DashItem;