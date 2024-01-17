import axios from "axios"
import { useState } from "react"

export function ArticlesIndex() {
  const [articles, setArticles] = useState([])
  const apiKey = import.meta.env.VITE_API_KEY
  const [searchTerm, setSearchTerm] = useState("")



  const getArticles = () => {
    console.log("getting articles")
    axios.get(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`)
    .then((response) => {
      console.log(response.data)
      setArticles(response.data.articles)
    })
  }


  return (
    <div>
      <h1>All Articles</h1>
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) } list="titles" /></p>
      <button onClick={getArticles}>Get Articles</button>
      {articles.map((article) => (
        <div key={article.title}>
          <p>Title: {article.title}</p>
        </div>
      ))}
    </div>
  );
}
