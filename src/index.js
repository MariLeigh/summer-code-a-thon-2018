import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'

import Vendor from  './components/Vendor'

ReactDOM.render(
  <BrowserRouter>
  <div>
    <Route path='/' component={App} />
    <Route path='/' component={Vendor}/>
  </div>
  </BrowserRouter>,
  document.getElementById('root')
);
