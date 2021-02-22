import {useState, useEffect} from "react"
import fetch from "node-fetch"

function Quote() {
  const [quote, setQuote] = useState({
    author: "",
    text: ""
  });
  useEffect(() => {
    fetch("https://random-quote-generator-clmn.herokuapp.com/quotes")
      .then((response) => {
        return response.json();
      })
      .then((data) => setQuote({
        author: data.author,
        text: data.body
      }))
  }, [quote])
  return <div>{quote.author} {quote.text}</div>
}

export default Quote;