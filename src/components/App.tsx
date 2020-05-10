import React from 'react'
import './App.scss'
import Header from './Header'
import QuoteBox from './QuoteBox'
import Buttons from './Buttons'

import useFetchQuote from '../hooks/useFetchQuote'
import Footer from './Footer'

const App = () => {
  const {
    quote,
    fetchQuote,
    isExplicit,
    toggleIsExplicit,
    loading,
  } = useFetchQuote()

  return (
    <div className="app">
      <Header />
      <main>
        <QuoteBox quote={quote} loading={loading} />
        <Buttons
          quote={quote}
          fetchQuote={fetchQuote}
          isExplicit={isExplicit}
          toggleIsExplicit={toggleIsExplicit}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
