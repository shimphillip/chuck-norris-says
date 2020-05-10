import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './styles.scss'

interface ButtonsProps {
  quote: string
  fetchQuote: () => Promise<void>
  isExplicit: boolean
  toggleIsExplicit: () => void
}

const Buttons = ({
  quote,
  fetchQuote,
  isExplicit,
  toggleIsExplicit,
}: ButtonsProps) => (
  <aside className="buttons">
    <button className="btn btn--new" onClick={fetchQuote}>
      New Quote
    </button>

    <a
      className="btn btn--tumblr"
      href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=ChuckNorris&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTumblr} />
    </a>

    <a
      className="btn btn--tw"
      href={`https://twitter.com/intent/tweet?hashtags=chucknorris&related=ChuckNorris&text=${quote}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>

    <button
      className={['btn', isExplicit ? 'btn--active' : ''].join(' ').trim()}
      onClick={toggleIsExplicit}
    >
      {isExplicit ? 'Explicit Content filtered' : 'Filter Explicit Content'}
    </button>
  </aside>
)

export default Buttons
