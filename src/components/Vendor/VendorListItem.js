import React, {Component} from 'react'
import {items, users} from '../dummyData'
import swarm from "../../swarm";
import { withRouter } from "react-router-dom";
import { join } from 'path';


class VendorListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vendorWallet: props.currentUser,
      web3: props.web3,
      userInfo: '',
      imageHash: '',
      item: '',
      subInfo: '',
      description: '',
      price: '',
      photoUrl: '',
      quantity: '',
      deliveryRadius: '',
      deliveryFee: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      addedItems: [],
      createVis: true
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uploadNewItem = this.uploadNewItem.bind(this)
    this.captureFile = this.captureFile.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.resetItemState = this.resetItemState.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)
    // console.log('======')
    this.setState(({
      vendorWallet: nextProps.currentUser,
      web3: nextProps.web3
    }))
  }

  handleChange(key, event) {
    this.setState({[key]: event.target.value})
  }

  toggleModal(e) {
    if (e.target.className === 'fa fa-times close') this.setState({ addedModal: false }), this.resetItemState()
    if (e.target.className === 'primary-btn less-btn addPackets') {
      this.setState({ addedModal: false }),
      this.props.addedItems(this.state.addedItems),
      this.resetItemState(),
      this.setState({ createVis: true })
    }
    if (e.target.className === 'addItems') this.setState({ createVis: false })
    if (e.target.className === 'addItems' && this.state.createVis === false) this.setState({ createVis: true })
    if (e.target.id === 'addedCross') this.setState({ createVis: false })
    if (e.target.id === 'addedCross' && this.state.createVis === false) this.setState({ createVis: true })
    if (e.target.className === 'addItemsTxt') this.setState({ createVis: false })
    if (e.target.className === 'addItemsTxt' && this.state.createVis === false) this.setState({ createVis: true })
  }

  captureFile(e) {
    e.preventDefault();
    // create the reader and update the load function
    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = e.target.result;
      const unit8Array = new Uint8Array(data);
      console.log(unit8Array);
      try {
        const imageHash = await swarm.upload(unit8Array)
        console.log("photoHash: " + imageHash);
        console.log(this.state)
        this.setState({imageHash});
      } catch (e) {
        console.log(e);
      }
    };
    // read the file
    reader.readAsArrayBuffer(e.target.files[0]);
  };

  uploadNewItem(newItem) {
    // const data = this.state.web3.utils.stringToHex(JSON.stringify(newItem));
    const data = JSON.stringify(newItem)
    let MRU_MANIFEST_KEY;
    // console.log("Addr "+this.state.vendorWallet);
    (async () => {
      try {
        MRU_MANIFEST_KEY = await swarm.createMutableResource({
          "ownerAddr": this.state.vendorWallet,
          "name": "My 1st resource",
          "frequency": 10,
          "startTime": parseInt("" + (Date.now() / 1000), 10)
        });
        console.log("MRU_MANIFEST_KEY: " + MRU_MANIFEST_KEY);
        await swarm.updateMutableResource({
          "data": data
        }, MRU_MANIFEST_KEY);

        for (let i = 0; i < users.length; i++) {
          if (users[i].wallet === this.state.vendorWallet) {
            users[i].directory_hash = MRU_MANIFEST_KEY;
            this.props.addUserInfo(users[i]);
          }
        }
        //.then(
        // ()=>
        //  window.setTimeout(()=>(swarm.updateMutableResource({
        //      "data": "0x87234d01"
        //  }, fileHash)),10000));
      } catch (e) {
        console.log(e);
      }
    })();
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.vendorWallet) {
      alert("Your metamask account is not signed in, item not added.")
      return
    }
    let newItem = {};
    if (this.state.vendorWallet) newItem.vendorWallet = this.state.vendorWallet
    if (this.state.item) newItem.item = this.state.item
    if (this.state.description) newItem.description = this.state.description
    if (this.state.price) newItem.price = this.state.price
    if (this.state.imageHash) newItem.imageHash = this.state.imageHash
    //if (this.state.newItem.photoUrl) newItem.photoUrl = this.state.newItem.photoUrl
    if (this.state.quantity) newItem.quantity = this.state.quantity
    if (this.state.deliveryRadius) newItem.deliveryRadius = this.state.deliveryRadius
    if (this.state.deliveryFee) newItem.deliveryFee = this.state.deliveryFee
    newItem.id = items.length;
    items[items.length] = this.state.newItem;
    this.uploadNewItem(newItem);
    items.push(newItem)
    console.log('An item has been added to our marketplace: ' + JSON.stringify(newItem))
    event.preventDefault()
    // console.log(this.state);
    const file= JSON.stringify(this.state)
        const fileHash = swarm.upload(file)
        console.log("Uploaded file: Address: ", fileHash)
        if (fileHash) {
          this.setState({ addedModal: true })
          let joinAdded = this.state.addedItems
          joinAdded.push(newItem.id)
          this.setState({ addedItems: joinAdded })
          this.setState({ createVis: false })
          this.props.addedItems(joinAdded)
        }
  }

  resetItemState() {
    this.setState({
      imageHash: '',
      item: '',
      subInfo: '',
      description: '',
      price: '',
      photoUrl: '',
      quantity: '',
      deliveryRadius: '',
      deliveryFee: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  render() {
    return (
      <div>
        {this.state.createVis &&
        <div className="packetGrid createPacket">
          <form id="list-item-form" onSubmit={this.handleSubmit}>
            <div className="pName left-half">
              <label>
                Name of Package
              </label>
              <input type="text"
                placeholder="e.g. Vegan Groceries for two weeks"
                value={this.state.item}
                onChange={(e) => this.handleChange('item', e)}
              />
            </div>
            <div className="pSubInfo">
              <label>
                Sub Info
              </label>
              <input type="text"
                placeholder="e.g. Feeds 1-2 people"
                value={this.state.subInfo}
                onChange={(e) => this.handleChange('subInfo', e)}
              />
            </div>
            <div className="pDescription left-half">
              <label>
                Description (160 char max)
              </label>
              <textarea type="text"
                value={this.state.description}
                onChange={(e) => this.handleChange('description', e)}
              />
            </div>
            <div className="pPrice">
              <label>
                Price (USD)
              </label>
              <input type="text"
                value={this.state.price}
                onChange={(e) => this.handleChange('price', e)}
              />
            </div>
            <div className="pImage">
              <label>
                Image
              </label>
              <input type="file"
                      onChange={this.captureFile}
                      />
            </div>
            <div className="pQuantity">
              <label>
                Stock Available <i className="fa fa-question-circle"></i>
              </label>
              <input type="text"
                      value={this.state.quantity}
                      onChange={(e) => this.handleChange('quantity', e)}
              />
            </div>
            <div className="pDistance">
              <label>
                Delivery distance <i className="fa fa-question-circle"></i>
              </label>
              <input type="text"
                      value={this.state.deliveryRadius}
                      onChange={(e) => this.handleChange('deliveryRadius', e)}
              />
            </div>
            <div className="pFee">
              <label>
                Delivery fee
              </label>
              <input type="text"
                      value={this.state.deliveryFee}
                      onChange={(e) => this.handleChange('deliveryFee', e)}
              />
            </div>
            <div className="pAddress left-half">
              <label>
                Street Address
              </label>
              <input type="text"
                      value={this.state.address}
                      onChange={(e) => this.handleChange('address', e)}
              />
            </div>
            <div className="pAddress2">
              <label>
                Address 2
              </label>
              <input type="text"
                      value={this.state.address2}
                      onChange={(e) => this.handleChange('address2', e)}
              />
            </div>
            <div className="pCity">
              <label>
                City
              </label>
              <input type="text"
                      value={this.state.city}
                      onChange={(e) => this.handleChange('city', e)}
              />
            </div>
            <div className="pState">
              <label>
                State
              </label>
              <input type="text"
                      value={this.state.state}
                      onChange={(e) => this.handleChange('state', e)}
              />
            </div>
            <div className="pZip">
              <label>
                Zip
              </label>
              <input type="text"
                      value={this.state.zip}
                      onChange={(e) => this.handleChange('zip', e)}
              />
            </div>
            <input className="primary-btn create-pkt" type="submit" value="Create Packet"/>
          </form>
        </div>
        }
        {this.state.addedModal &&
          <div className='signupModal'>
            <i className="fa fa-times close" onClick={this.toggleModal}></i>
            <div>
              <h4>Success!</h4>
            <text>Packet added: {this.state.item}</text>
              <div className='addedPacket'>
                <div className='primary-btn less-btn addPackets' onClick={this.toggleModal}>
                  Add more packets
                </div>
                <div className='primary-btn' onClick={() => {
                  this.props.loginHandler(this.props.currentUser)
                  this.props.history.replace('/v/dash')
                }}>
                  Go to Dashboard
                </div>
              </div>
            </div>
          </div>
        }
        <div className="addItems" onClick={this.toggleModal}>
          <div className="crossIcon" id="addedCross"></div>
          <h4 className="addItemsTxt">Add items</h4>
        </div>
      </div>
    )
  }
}

export default withRouter(VendorListItem);