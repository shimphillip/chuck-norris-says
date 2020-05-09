import React, { Fragment, memo } from 'react'
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

const QuoteBox = memo(({ quote, loading }: QuoteBoxProps) => {
  const typeSpeed = 30

  return (
    <section className="quote_box">
      <div className="img_box">
        <img src={ChuckGif} alt="Chuck GIF" />
      </div>
      <div className="quote">
        {loading ? (
          <img src={trollFace} className="loader" alt="Troll face" />
        ) : (
          <Fragment>
            <Typing>
              <span>
                <FontAwesomeIcon icon={faQuoteLeft} className="quote_left" />
                <Typing.Speed ms={typeSpeed} />
                {quote}
              </span>
            </Typing>
          </Fragment>
        )}
      </div>
    </section>
  )
})

export default QuoteBox
