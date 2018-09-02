import React from 'react';
import "./vendorAddNewItemPage.css";
import PopupForm from './PopupForm';
import AddNewItemForm from './AddNewItemForm'

class VendorAddNewItemPage extends React.Component {
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
            <div>
            <div className='container'>
                <button className='addItemButton' onClick={this.modalOpened}>Add Item</button>
            </div>
                <PopupForm visibility={this.state.visibility} content={<AddNewItemForm/>} />
            </div>
        );
    }
}

export default VendorAddNewItemPage ;