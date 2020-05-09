import React from 'react'
import './App.scss'

import Header from './Header'

import useFetchQuote from '../hooks/useFetchQuote'

const App = () => {
  const { quote, fetchQuote, loading } = useFetchQuote()
  
  return (
    <div>
      <Header />
      <main className="main"></main>
    </div>
  )
}

export default App
