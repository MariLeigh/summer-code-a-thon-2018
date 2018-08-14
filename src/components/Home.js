import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div><Link to='/fulfillment'>Fulfillment Page</Link></div>
                <div><Link to='/addNewItem'>Vendor add new-item page</Link></div>
                <h1>Home</h1>
            </div>
        );
    }

}

export default Home;