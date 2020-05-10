import React from 'react'
import Typing from 'react-typing-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import ChuckGif from '../../assets/chuck.gif'
import trollFace from '../../assets/troll-face.png'
import './styles.scss'

interface QuoteBoxProps {
  quote: string
  loading: boolean
}

// +quot;

const QuoteBox = ({ quote, loading }: QuoteBoxProps) => {
  return (
    <section className="quote-box">
      <img className="chuck-norris-gif" src={ChuckGif} alt="Chuck Norris Gif" />
      {loading && <img className="loader" src={trollFace} alt="Troll face" />}
      {!loading && (
        <Typing>
          <p>
            <FontAwesomeIcon className="quote-mark" icon={faQuoteLeft} />
            <Typing.Speed ms={20} />
            {quote}
          </p>
        </Typing>
      )}
    </section>
  )
}

export default QuoteBox
