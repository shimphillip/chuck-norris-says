import React from 'react'
import './App.scss'
import Header from './Header'
import QuoteBox from './QuoteBox'
import InfoBox from './InfoBox'

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
    <div>
      <Header />
      <main>
        <QuoteBox quote={quote} loading={loading} />
        <InfoBox
          quote={quote}
          fetchQuote={fetchQuote}
          isExplicit={isExplicit}
          toggleIsExplicit={toggleIsExplicit}
        />
      </main>
    </div>
  )
}

export default App
