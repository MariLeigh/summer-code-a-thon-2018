import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import VendorFulfillmentPage from '../Vendor/VendorFulfillmentPage'
import Home from '../Home'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Route path='/home' component={Home}/>
                    <Route path='/fulfillment' component={VendorFulfillmentPage}/>
                </div>
            </Router>
        );
    }
}


export default App
