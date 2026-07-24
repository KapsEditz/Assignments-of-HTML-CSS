import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import About from './parent'
import A from './child'

import Pmethod from './assignments/assignment1child'
import Methodoop from './assignments/assignment1parent'

import Formm from './form'

import RestParent from './RestParent'
import RestChild from './RestChild'

import SpreadParent from './SpreadParent'
import SpreadChild from './SpreadChild'

import ContactForm from './ContactForm'
import UserInfo from './UserInfo'

import UseEffectt from './useEffect'
import DataFetch from './datafetch'

import Toggle from './toggle'

import UseContextFun from './useContext'
import UseContext_Parent from './useContext_child'

import UiColorChanger from './UiColorChanger'
import UICOLOR from './UICOLOR'

function App() {

  return (
    <>
      {/* <ContactForm /> */}
      {/* <UseEffectt /> */}
      {/* <Toggle /> */}
      {/* <UseContextFun /> */}
      {/* <DataFetch /> */}
      <UiColorChanger />
    </>
  )
}

export default App
