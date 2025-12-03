import { useState, useEffect } from 'react';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

        //check 200
        if (!response.ok) {
          throw new Error(`Errore HTTP! Stato: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        
        setError('Impossibile recuperare i dati: ' + err.message);
        setPosts([]);
      } finally {
        
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  //loading
  if (isLoading) {
    return <div className="loading">⏳ Caricamento dei post in corso...</div>;
  }
  //error
  if (error) {
    return <div className="error">❌ Errore: {error}</div>;
  }

  //cards
  return (
    <div className="post-list-container">
      <h1>Articoli Recenti (5 Post)</h1>
      <div className="post-cards-grid">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="card-footer">
              <small>ID Post: {post.id}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;