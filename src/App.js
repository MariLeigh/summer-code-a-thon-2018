import React, {Component} from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from './utils/getWeb3'
import { BrowserRouter, Route } from 'react-router-dom'
import swarm from './swarm.js'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Home from './components/Home'
import Vendor from './components/Vendor'
import Donor from './components/Donor'
import Receiver from './components/Receiver'
import VendorListItem from './components/VendorListItem'
import Market from './components/Market'
import VendorAddNewItemPage from "./components/Vendor/VendorAddNewItemPage";
import VendorFulfillmentPage from "./components/Vendor/VendorFulfillmentPage";


class App extends Component {
  constructor(props) {
    super(props)
    this.step = props.step || 0
    this.state = {
      storageValue: 0,
      web3: null,
      currentUser: ''
    }
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3,
        currentUser: results.web3.eth.accounts.givenProvider.publicConfigStore._state.selectedAddress
      })
      // Instantiate contract once web3 provided.
      // this.instantiateContract()
    })
    .catch((e) => {
      console.log(e)
      console.log('Error finding web3.')
    })
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)
    simpleStorage.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({storageValue: result.c[0]})
      })
    })
  }


  render() {
    return (
      <div className="App">
        <nav className="navbar pure-menu pure-menu-horizontal">
            <a href="#" className="pure-menu-heading pure-menu-link">RemitMart</a>
            <a className="nav-link text-nowrap text-muted" id="eth-address">
            <i className="fa fa-user fa-fw"></i>
            { this.state.currentUser }
          </a>
        </nav>

        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <BrowserRouter>
                <div>
                  <Route exact path='/' component={Home} />
                  <Route path='/v/signup' component={Vendor} currentUser={this.state.currentUser} />
                  <Route path='/v/listitem' component={VendorListItem} />
                  <Route path='/d/signup' component={Donor} />
                  <Route path='/r/signup' component={Receiver} />
                  <Route path='/market' render={props => <Market currentUser={this.state.currentUser} />} />
                  <Route path='/home' component={Home}/>
                  <Route path='/fulfillment' component={VendorFulfillmentPage}/>
                  <Route path='/addNewItem' component={VendorAddNewItemPage}/>
                </div>
              </BrowserRouter>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default App
