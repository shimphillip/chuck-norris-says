import { useState, useEffect } from 'react'

interface IQuoteResponse {
  type: string
  value: {
    categories: string[]
    id: number
    joke: string
  }
}

const proxy = 'https://cors-anywhere.herokuapp.com/'
const API = `http://api.icndb.com/jokes/random`

const useFetchQuote = () => {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)
  const [isExplicit, setIsExplicit] = useState(true)

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    try {
      setLoading(true)

      const queryString = isExplicit ? '?exclude=[explicit]' : ''
      const response = await fetch(proxy + API + queryString)
      const data: IQuoteResponse = await response.json()
      const joke = data.value.joke.split('&quot;').join('"')

      setQuote(joke)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const toggleIsExplicit = () => {
    setIsExplicit(!isExplicit)
  }

  return { quote, fetchQuote, isExplicit, toggleIsExplicit, loading }
}

export default useFetchQuote
