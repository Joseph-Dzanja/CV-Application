import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Form from './components/Form'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Form />
  </React.StrictMode>,
)
