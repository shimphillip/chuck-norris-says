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

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = async () => {
    try {
      setLoading(true)
      
      const response = await fetch(proxy + API)
      const data: IQuoteResponse = await response.json()
      const { joke } = data.value

      setQuote(joke)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return { quote, fetchQuote, loading }
}

export default useFetchQuote
