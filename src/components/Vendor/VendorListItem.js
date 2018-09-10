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
      description: '',
      price: '',
      photoUrl: '',
      quantity: '',
      deliveryRadius: '',
      deliveryFee: ''
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
    // console.log('An item has been added to our marketplace: ' + JSON.stringify(this.state))
    // event.preventDefault()
    // console.log(this.state);
    // const file= JSON.stringify(this.state)
    //     const fileHash = swarm.upload(file)
    //     console.log("Uploaded file: Address: ", fileHash)
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Item:
              <input type="text"
                     value={this.state.item}
                     onChange={(e) => this.handleChange('item', e)}
              />
            </label>
            <label>
              Description:
              <input type="text"
                     value={this.state.description}
                     onChange={(e) => this.handleChange('description', e)}
              />
            </label>
            <label>
              Price:
              <input type="text"
                     value={this.state.price}
                     onChange={(e) => this.handleChange('price', e)}
              />
            </label>
            <label>
              Image:
              <input type="file"
                     onChange={this.captureFile}
              />
            </label>
            <label>
              Quantity:
              <input type="text"
                     value={this.state.quantity}
                     onChange={(e) => this.handleChange('quantity', e)}
              />
            </label>
            <label>
              Delivery distance:
              <input type="text"
                     value={this.state.deliveryRadius}
                     onChange={(e) => this.handleChange('deliveryRadius', e)}
              />
            </label>
            <label>
              Delivery Fee:
              <input type="text"
                     value={this.state.deliveryFee}
                     onChange={(e) => this.handleChange('deliveryFee', e)}
              />
            </label>
            <input type="submit" value="Add Item"/>
          </form>
        </div>
      </div>
    )
  }
}

export default VendorListItem