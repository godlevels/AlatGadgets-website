import React from 'react'
import ReactDOM from 'react-dom/client'
import 'remixicon/fonts/remixicon.css'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/Store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        theme="dark"
        />
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
