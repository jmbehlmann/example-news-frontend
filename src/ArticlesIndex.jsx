import axios from "axios"
import { useState } from "react"

export function ArticlesIndex() {
  const [articles, setArticles] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY


  const getArticles = () => {
    console.log("getting articles")
    axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
    .then((response) => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }


  return (
    <div>
      <h1>All Articles</h1>
      <button onClick={getArticles}>Get Articles</button>
      {articles.map((article) => (
        <div key={article.id}>
          <p>Title: {article.title}</p>
        </div>
      ))}
    </div>
  );
}
