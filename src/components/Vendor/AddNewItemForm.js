import React from 'react';
import './addNewItemform.css';
import swarm from '../../swarm';
import web3 from 'web3';


class AddNewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            ipfsFileHash: '',
            newItem: {
                type: '',
                description: '',
                price: '',
                number: '',
                imageHash: null
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.captureFile=this.captureFile.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let newItem = Object.assign({}, this.state.newItem);
        name === "itemType" ? newItem.type = target.value : name === "itemNumber" ?
            newItem.number = target.value : name === "price" ? newItem.price = target.value :
                newItem.description = target.value;
        this.setState({newItem})
    }

    captureFile(e) {
        e.preventDefault();
        const reader = new FileReader();
        let newItem = Object.assign({}, this.state.newItem);
        reader.onload = function (e) {
            const data = e.target.result;
            const unit8Array = new Uint8Array(data);
            console.log(unit8Array);
            try {
                swarm.upload(unit8Array).then((fileHash) => {
                    console.log("key: " + fileHash);
                    newItem.imageHash = fileHash;
                    //swarm.download(fileHash).then((file)=>console.log(file));
                });

            } catch (e) {
                console.log(e);
            }
        };
        reader.readAsArrayBuffer(e.target.files[0]);
        this.setState({newItem});
    };

    onSubmit(event){

        event.preventDefault();

        const data = web3.utils.stringToHex(JSON.stringify(this.state.newItem));
        let fileHash;
        (async()=>{
            try{
                fileHash = await swarm.createMutableResource({
                    "name": "My 1st resource",
                    "frequency": 10,
                    "startTime": parseInt("" + (Date.now() / 1000), 10)
                });
                console.log("MRU_MANIFEST_KEY: " + fileHash);
                await swarm.updateMutableResource({
                    "data": data
                }, fileHash)
                //.then(
                // ()=>
                //  window.setTimeout(()=>(swarm.updateMutableResource({
                //      "data": "0x87234d01"
                //  }, fileHash)),10000));
            }catch (e) {
                console.log(e);
            }
        })();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="addNewItemForm">
                        <h2 className='e1'>Add New Item</h2>
                        <div className="e2">
                            <label> Type </label>
                        </div>
                        <div className="e3">
                            <input
                                name="itemType"
                                type="textArea"
                                value={this.state.newItem.type}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className='e4'>
                            <label>
                                Item Number
                            </label>
                        </div>
                        <div className="e5">
                            <input
                                name="itemNumber"
                                type="number"
                                value={this.state.newItem.number}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="e6">
                            <label>Price</label>
                        </div>
                        <div className="e7">
                            <input
                                name="price"
                                type="number"
                                min="1"
                                step="any"
                                value={this.state.newItem.price}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="e8">
                            <label>
                                Product Description
                            </label>
                        </div>
                        <div className="e9">
                            <textarea
                                name="description"
                                value={this.state.newItem.description}
                                onChange={this.handleInputChange}/>
                        </div>
                        <div className="e10">
                            <input
                                type="file"
                                onChange={this.captureFile}
                                name="photoUpload"
                                />
                        </div>
                        <div className="e11">
                            <input
                                type="submit"
                                value="Submit"
                                onChange={this.handleInputChange}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddNewItemForm;