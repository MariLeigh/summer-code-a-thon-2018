import React from 'react';
import notebook from '../../images/notebook.jpg'
import './item.css'
import Modal from 'react-modal'
import './modalForm.css'


class PopupForm extends React.Component {
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
            <Modal isOpen={this.props.visibility} className="Modal" overlayClassName="Overlay">
                <div className="form">
                    <h2>Order Shipment Verification</h2>
                    <form>
                        <div className="formElement">
                            <label>
                                <span>Shipment Method</span>
                                <input
                                    name="shipmentMethod"
                                    type="textArea"
                                    value={this.state.shipmentMethod}
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <div className="formElement">
                            <label>
                                <span>Shipping Date</span>
                                <input
                                    name="shippingDate"
                                    type="date"
                                    value={this.state.shippingDate}
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <div className="formElement">
                            <label>
                                <span>Tracking Number</span>
                                <input
                                    name="trackingNumber"
                                    type="textArea"
                                    value={this.state.trackingNumber}
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <div className="formElement">
                            <label>
                                <span>Other information</span>
                                <textarea
                                    name="otherInfo"
                                    value={this.state.otherInfo}
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                        <div className="formElement">
                            <label>
                                <input
                                    type="submit"
                                    value="Submit"
                                    onChange={this.handleInputChange}/>
                            </label>
                        </div>
                    </form>
                </div>
            </Modal>
        );
    }
}

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visibility: false};
        this.modalOpened = this.modalOpened.bind(this);
    }

    modalOpened() {
        this.setState({visibility: true})
    }

    render() {
        return (
            <div className='item'>
                <img src={notebook} className='notebook-img' alt="item-notebook"/>
                <h5>Item Description</h5>
                <ul>
                    <li>Name: {this.props.description.type}</li>
                    <li>Price: {this.props.description.price}</li>
                    <li>item Number: {this.props.description.itemNumber}</li>
                </ul>
                <button onClick={this.modalOpened}>Shipped</button>
                <PopupForm visibility={this.state.visibility}/>
            </div>
        );
    }
}

export default Item;