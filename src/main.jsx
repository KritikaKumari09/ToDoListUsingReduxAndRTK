import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  // just like context api here also we have provider within which
  // we keep components which can access store
  // and also similar to provider of context api here also we need to pass 
  // value={} of which components in  between the provider can have access
  // but here in place of value atrribute we have store attribute
  // where we pass the store that  we imported from our store.js

  <Provider store ={store}>
    <App />
  </Provider>
)
