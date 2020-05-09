import React from 'react'
import './App.scss'
import Header from './Header'
import QuoteBox from './QuoteBox'

import useFetchQuote from '../hooks/useFetchQuote'

const App = () => {
  const { quote, fetchQuote, loading } = useFetchQuote()

  return (
    <div>
      <Header />
      <main className="main">
        <QuoteBox quote={quote} loading={loading} />
      </main>
    </div>
  )
}

export default App
