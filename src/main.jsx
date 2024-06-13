import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Form from './components/Form'
import './styles/main.css'
import Cv from './components/Cv'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Cv />
  </React.StrictMode>,
)
