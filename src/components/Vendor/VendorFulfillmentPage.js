import React from 'react';
import VendorFulfillmentHeader from './VendorFulfillmentHeader'
import Item from "./Item";

const description = {
    type: "Notebook",
    price: '5$',
    itemNumber: 1
};

class VendorFulfillmentPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <VendorFulfillmentHeader/>
                <Item description={description}/>
            </div>
        );
    }
}

export default VendorFulfillmentPage;