import React from 'react';
import './addNewItemform.css';
import swarm from '../../swarm'


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
                number: ''
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

    captureFile(event){
        event.preventDefault();
        const file="hello";
        this.setState({file: file});
    }

    onSubmit(event){
        event.preventDefault();
       const file="hello";
        (async()=>{
            try{
                const fileHash = await swarm.upload(file);
                console.log("Uploaded file. Address:", fileHash);
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