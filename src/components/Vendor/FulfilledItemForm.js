import React from 'react';
import './fulfilledItemForm.css';


class FulfilledItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingNumber: '',
            shipmentMethod: '',
            shippingDate: '',
            otherInfo: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        name === "shipmentMethod" ? this.setState({shipmentMethod: target.value}) : name === "shippingDate" ?
            this.setState({shippingDate: target.value}) : name === "trackingNumber" ? this.setState({trackingNumber: target.value}) :
                this.setState({otherInfo: target.value});

    }

    render() {
        return (
            <div>
                <h2>Order Shipment Verification Form</h2>
                <form>
                    <div className="fulfilledItemForm">
                        <div className="p1">
                            <label> Shipment Method </label>
                        </div>
                        <div className="p2">
                            <input
                                name="shipmentMethod"
                                type="textArea"
                                value={this.state.shipmentMethod}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className='p3'>
                            <label>
                                Shipping Date
                            </label>
                        </div>
                        <div className="p4">
                            <input
                                name="shippingDate"
                                type="number"
                                value={this.state.shippingDate}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="p5">
                            <label>Tracking Number</label>
                        </div>
                        <div className="p6">
                            <input
                                name="trackingNumber"
                                type="textArea"
                                value={this.state.trackingNumber}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="p7">
                            <label>
                                Other information
                            </label>
                        </div>
                        <div className="p8">
                            <textarea
                                name="otherInfo"
                                value={this.state.otherInfo}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="p9">
                            <input
                                type="submit"
                                value="Submit"
                                onChange={this.handleInputChange}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FulfilledItemForm;