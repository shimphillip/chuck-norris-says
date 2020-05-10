import React from 'react'
import './App.scss'
import Header from './Header'
import QuoteBox from './QuoteBox'
import Buttons from './Buttons'

import useFetchQuote from '../hooks/useFetchQuote'

const App = () => {
  const {
    quote,
    fetchQuote,
    isExplicit,
    toggleIsExplicit,
    loading,
  } = useFetchQuote()

  return (
    <>
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
    </>
  )
}

export default App
