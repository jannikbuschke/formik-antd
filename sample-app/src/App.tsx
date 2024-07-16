import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import{Input,Form,FormikDebug}from "formik-antd"
import{Formik }from"formik"
import { Overview } from './overview'

function App() {

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Formik + Antd</h1>
      
      <Overview />
    
    </div>
  )
}

export default App
