import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import VendorSignup from './components/VendorSignup'

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route path='/' component={App} />
    <Route path='/vendorsignup' component={VendorSignup} />
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);
