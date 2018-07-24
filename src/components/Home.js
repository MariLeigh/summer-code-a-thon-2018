import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to='/fulfillment'>Fulfillment Page</Link>
                <h1>Home</h1>
            </div>
        );
    }

}

export default Home;