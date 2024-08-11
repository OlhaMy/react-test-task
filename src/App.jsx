import "./App.css";
import SearchForm from "./components/SearchForm/SearchForm";
import { useState } from "react";
import { fetchArticlesWithTopic } from "./articles-api";
import ArticlesList from "./components/ArticlesList/ArticlesList";

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handSearch} />
      <h1>Latest articles</h1>
      {loading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticlesList items={articles} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    </div>
  );
}

export default App;
