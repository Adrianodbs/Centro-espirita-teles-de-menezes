import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

import * as C from './style'

function Conteudo() {
  const [query, setQuery] = useState('')
  const [posts, setPosts] = useState([])

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
