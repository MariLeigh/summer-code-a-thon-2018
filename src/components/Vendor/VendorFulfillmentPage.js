import React from 'react';
import VendorFulfillmentHeader from './VendorFulfillmentHeader'
import Item from "./Item";
import PopupForm from './PopupForm';
import './vendorFulfillmentPage.css'
import FulfilledItemForm from "./FulfilledItemForm";

const item = {
    type: "Notebook",
    price: '5$',
    itemNumber: 1
};

class VendorFulfillmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            visibility: false
        }
        this.modalOpened=this.modalOpened.bind(this);
    }

    modalOpened() {
        this.setState({visibility: true})
    }

    render() {
        return (
            <div>
                <VendorFulfillmentHeader/>
                <div className='container'>
                    <div className='item1'>
                        <Item item={item}/>
                        <button onClick={this.modalOpened}>Shipped</button>
                    </div>
                </div>
                <PopupForm content={<FulfilledItemForm/>} visibility={this.state.visibility}/>
            </div>
        );
    }
}

export default VendorFulfillmentPage;