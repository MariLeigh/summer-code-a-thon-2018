import React, {Component} from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import getWeb3 from './utils/getWeb3'
import {BrowserRouter, Route} from 'react-router-dom'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Home from './components/Home'
import Vendor from './components/Vendor/Vendor'
import Donor from './components/Donor/Donor'
import Receiver from './components/Receiver/Receiver'
import VendorListItem from './components/Vendor/VendorListItem'
import Market from './components/Market/Market'
import VendorAddNewItemPage from "./components/Vendor/VendorAddNewItemPage";
import ReceiverDash from './components/Receiver/Dashboard';
import DonorDash from './components/Donor/Dashboard';
import Nav from './components/Navbar'
import {users} from "./components/dummyData";

class App extends Component {
  constructor(props) {
    super(props);
    this.step = props.step || 0;

    this.state = {
      storageValue: 0,
      contract: '',
      web3: null,
      currentUser: '',
      userType: '',
      userName: '',
      validAccounts: ''
    };
    this.login = this.login.bind(this);
    this.setUserType = this.setUserType.bind(this);
    this.addUserInfo = this.addUserInfo.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.
    getWeb3.then(results => {
      results.web3.eth.getAccounts().then(accounts => {
        const regUser = users.filter(u => u.wallet === accounts[0]);
        const userName = regUser[0] ? regUser[0].name : "New User";
        this.setState({
          web3: results.web3,
          currentUser: accounts[0],
          userName: userName,
          validAccounts: accounts
        })
        //this.instantiateContract();
      });
      // Instantiate contract once web3 provided.
    })
      .catch((e) => {
        console.log(e);
        console.log('Error finding web3.');
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
    var simpleStorageInstance;
    // Get accounts.
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance;
        // Stores a given value, 5 by default.
        console.log(simpleStorageInstance);
        this.setState({contract: simpleStorageInstance});
        //return simpleStorageInstance.set(this.state.userInfo, {from: accounts[0]})
        //  return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(this.state.currentUser)
      }).then((result) => {
        // Update state with the result.
        return this.setState({storageValue: result.c[0]})
      })
  }

  login(currentUser) {
    const regUser = users.filter(u => u.wallet === currentUser);
    const userName = regUser[0] ? regUser[0].name : "New User";
    this.setState({currentUser: currentUser, userName: userName});
  }

  setUserType(userType) {
    this.setState({userType: userType});
  }

  addUserInfo(userInfo) {
    //Just to test if contract works.
    // this.state.contract.set(userInfo);
    this.setState({userInfo: userInfo});
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav userName={this.state.userName}/>
          <main className="container">
            <div className="pure-g">
              <div className="pure-u-1-1">
                <div>
                  <Route exact path='/' render={() => <Home setUserType={this.setUserType}/>}/>
                  <Route path='/r/signup'
                         render={() => <Receiver currentUser={this.state.currentUser}
                                                 validAccounts={this.state.validAccounts} loginHandler={this.login}/>}/>
                  <Route path='/v/signup' render={props => <Vendor currentUser={this.state.currentUser}
                                                                   validAccounts={this.state.validAccounts}
                                                                   loginHandler={this.login}/>}/>
                  <Route path='/v/listitem' render={props => <VendorListItem currentUser={this.state.currentUser}
                                                                             addUserInfo={this.addUserInfo}
                                                                             web3={this.state.web3}/>}/>
                  <Route path='/d/signup'
                         render={props => <Donor currentUser={this.state.currentUser}
                                                 validAccounts={this.state.validAccounts} loginHandler={this.login}/>}/>
                  <Route path='/market' render={props => <Market currentUser={this.state.currentUser}
                                                                 userType={this.state.userType}/>}/>
                  <Route path='/addNewItem' component={VendorAddNewItemPage}/>
                  <Route path='/r/dash' render={() => <ReceiverDash currentUser={this.state.currentUser}
                                                                    userType={this.state.userType}/>}/>
                  <Route path='/d/dash' render={() => <DonorDash currentUser={this.state.currentUser}
                                                                 userType={this.state.userType}/>}/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
