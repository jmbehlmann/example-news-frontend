import axios from "axios"
import { useState, useId } from "react"

export function ArticlesIndex() {
  const [articles, setArticles] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  // const apiKey = import.meta.env.VITE_API_KEY
  const category = useId();



  const getArticles = () => {
    axios
      .get(`http://localhost:3000/articles.json?q=${searchTerm}`)
      .then((response) => {
        console.log(response.data)
        setArticles(response.data.articles)
      })
  }


  return (
    <div>
      <h1>All Articles</h1>
      <label htmlFor="category">Choose a category:</label>
      <select name="category" id={category}>
        <option value="business">Business</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value) } list="titles" /></p>
      <button onClick={getArticles}>Get Articles</button>
      {articles.map((article) => (
        <div key={article.id}>
          <p>Title: {article.title}</p>
          <div>
            <img width="300px" src={article.urlToImage} />
          </div>
          <a href={article.url}>Go to article</a>
        </div>
      ))}
    </div>
  );
}
