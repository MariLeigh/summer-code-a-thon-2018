import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>

                <div><Link to='/fulfillment'>Fulfillment Page</Link></div>
                <div><Link to='/addNewItem'>Vendor add new-item page</Link></div>
                <h1>Home</h1>
            </div>
        );
    }

}

export default Home;

  // render() {
  //   return (
  //     <div>
  //       <main className="container">
  //         <div className="pure-g">
  //           <div className="pure-u-1-1">
  //             {/* <h1>Good to Go!</h1>
  //             <p>Your Truffle Box is installed and ready.</p>
  //             <h2>Smart Contract Example</h2>
  //             <p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
  //             <p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
  //             <p>The stored value is: {this.state.storageValue}</p> */}
  //             {/* <p>The step value is: {this.step}</p> */}
  //             <button onClick={() => location = '/v/signup'}>Sell Food</button>
  //             <button onClick={() => location = '/d/signup'}>Feed Someone</button>
  //             <button onClick={() => location = '/r/signup'}>Be Fed</button>
  //           </div>
  //         </div>
  //       </main>
  //     </div>
  //   )
  // }
}

