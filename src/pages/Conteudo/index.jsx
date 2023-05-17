import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import * as C from './style'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

function Conteudo() {
  const [query, setQuery] = useState('')
  const { documents: posts, loading } = useFetchDocuments('posts')

  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <C.Container>
      <C.Header>
        <h1>Veja os nossos posts mais recentes!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ou busque por tags..."
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </form>
      </C.Header>

      <C.Content>
        {loading && <p>Carregando...</p>}
        {posts &&
          posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <img src={post.image} alt={post.title} />
              <p>{post.body}</p>
              {post.tagsArray.map(tag => (
                <span>{tag}</span>
              ))}
            </div>
          ))}
        {posts && posts.length === 0 && (
          <div className="noPosts">
            <h3>Não foram encontrados posts</h3>
          </div>
        )}
      </C.Content>
    </C.Container>
  )
}

export default Conteudo
