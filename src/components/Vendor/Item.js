import React from 'react';
import notebook from '../../images/notebook.jpg'
import './item.css'


class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='item'>
                <img src={notebook} className='notebook-img' alt="item-notebook"/>
                <h5>Item Description</h5>
                <ul>
                    <li>Name: {this.props.item.type}</li>
                    <li>Price: {this.props.item.price}</li>
                    <li>item Number: {this.props.item.itemNumber}</li>
                </ul>
            </div>
        );
    }
}

export default Item;