import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblr, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './styles.scss'

interface InfoBoxProps {
  fetchQuote: () => Promise<void>
  quote: string
  isExplicit: boolean
  toggleIsExplicit: () => void
}

const InfoBox = memo(
  ({ fetchQuote, quote, isExplicit, toggleIsExplicit }: InfoBoxProps) => {
    return (
      <aside className="info_box">
        <div className="button_box">
          <button className="btn new" onClick={fetchQuote}>
            New Quote
          </button>

          <a
            href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=ChuckNorris&content=${quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn tumblr"
          >
            <FontAwesomeIcon icon={faTumblr} />
          </a>

          <a
            href={`https://twitter.com/intent/tweet?hashtags=chucknorris&related=ChuckNorris&text=${quote}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn tw"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <button
            onClick={toggleIsExplicit}
            className={['btn', isExplicit ? 'active' : ''].join(' ')}
          >
            {isExplicit
              ? 'Explicit Content filtered'
              : 'Filter Explicit Content'}
          </button>
        </div>
      </aside>
    )
  }
)

export default InfoBox
