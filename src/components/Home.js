import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              {
                /* <h1>Good to Go!</h1>
<p>Your Truffle Box is installed and ready.</p>
<h2>Smart Contract Example</h2>
<p>If your contracts compiled and migrated successfully, below will show a stored value of 5 (by default).</p>
<p>Try changing the value stored on <strong>line 59</strong> of App.js.</p>
<p>The stored value is: {this.state.storageValue}</p> */
              }
              {/* <p>The step value is: {this.step}</p> */}
              <button onClick={() => window.location = '/v/signup'}>Sell Food</button>
              <button onClick={() => window.location = '/d/signup'}>Feed Someone</button>
              <button onClick={() => window.location = '/r/signup'}>Be Fed</button>
            </div>
          </div>
        </main>

      </div>
    );
  }

}

export default Home;


