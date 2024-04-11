import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Chatbox from './components/Chatbox.jsx'
import data from '../data.js'
import './App.css'

export default function App() {

  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Header/>
      {cards}
      <Chatbox />
    </>
  )
}

