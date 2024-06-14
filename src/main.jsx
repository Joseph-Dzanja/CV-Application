import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './styles/main.css'
import Display from './components/DisplayCv'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Display />
  </React.StrictMode>,
)
