import React, {Component} from 'react'
import {items, users} from '../dummyData'
import swarm from "../../swarm";


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
      zip: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadNewItem = this.uploadNewItem.bind(this);
    this.captureFile = this.captureFile.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(({
      vendorWallet: nextProps.currentUser
    }))
  }

  handleChange(key, event) {
    this.setState({[key]: event.target.value})
  }

  captureFile(e) {
    e.preventDefault();
    const reader = new FileReader();
    let imageHash = '';
    reader.onload = function (e) {
      const data = e.target.result;
      const unit8Array = new Uint8Array(data);
      console.log(unit8Array);
      try {
        swarm.upload(unit8Array).then((fileHash) => {
          console.log("photoHash: " + fileHash);
          imageHash = fileHash;
          //swarm.download(fileHash).then((file)=>console.log(file));
        });

      } catch (e) {
        console.log(e);
      }
    };
    reader.readAsArrayBuffer(e.target.files[0]);
    this.setState({imageHash: imageHash});
  };

  uploadNewItem(newItem) {
    const data = this.state.web3.utils.stringToHex(JSON.stringify(newItem));
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
    console.log('An item has been added to our marketplace: ' + JSON.stringify(this.state))
    event.preventDefault()
    console.log(this.state);
    const file= JSON.stringify(this.state)
        const fileHash = swarm.upload(file)
        console.log("Uploaded file: Address: ", fileHash)
  }

  render() {
    return (
      <div>
        <div className="packetGrid">
          <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Create Packet"/>
          </form>
        </div>
      </div>
    )
  }
}

export default VendorListItem