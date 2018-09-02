import React from 'react'
import Modal from 'react-modal'
import './modalForm.css'

class PopupForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal isOpen={this.props.visibility}
                   className="Modal"
                   overlayClassName="Overlay"
            >
                {this.props.content}
            </Modal>
        );
    }
}
export default PopupForm;