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
      <div> {this.props.section === 'donationInfo' &&
      <div className='dash-Item donations-info-f'>
        <div className='description'>
          <h4>You have donated</h4>
          <div className="donations-info"><h1 className="donations-amount-h1">$150</h1></div>
        </div>
      </div>}
        {this.props.section !== 'donationInfo' &&
        <div className='dash-Item'>
          <img src={this.state.item.itemUrl} className='dash-img'/>
          <div className='description'>
            <h5><span className="important-item">{this.state.item.item}</span></h5>
            <h5><span className="propertyName important-item">{this.state.item.price} </span></h5>
            <h5><span className="propertyName">Vendor: </span> {this.state.item.vendorName}</h5>
            {this.props.section === 'inProcess' && this.props.userType === 'd' &&
            <div>
              <h5><span className="propertyName">Transaction Date: </span> Sep. 2</h5>
              <h5><span className="propertyName">Expires in: </span> 3 days</h5>
            </div>
            }
            {this.props.section === 'inProcess' && this.props.userType === 'r' &&
            <div>
              <div>
                <h5><span className="propertyName">Ship Date: </span> Sep. 2</h5>
                <h5><span className="propertyName">Delivery Estimate: </span> Between 2 to 3 days</h5>
              </div>
              <button className="conformation-B"> Confirm Delivery</button>
            </div>
            }
            {this.props.section === 'completed' && this.props.userType === 'd' &&
            <div>
              <h5><span className="propertyName">Transaction Closed: </span> Sep. 5</h5>
            </div>
            }
            {this.props.section === 'completed' && this.props.userType === 'r' &&
            <div>
              <h5><span className="propertyName">Delivered: </span> Aug. 23 2018</h5>
            </div>
            }
          </div>
        </div>}
      </div>
    );
  }
}

export default DashItem;