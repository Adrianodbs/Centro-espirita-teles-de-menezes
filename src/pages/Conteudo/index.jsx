import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import amarelo from '../../../public/img/amarelo.jpg'

import * as C from './style'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

function Conteudo() {
  const [query, setQuery] = useState('')
  const { documents: posts, loading } = useFetchDocuments('posts')

  return (
    <C.Container>
      <img src={amarelo} alt="banner" className="banner" />
      <C.Header>
        <h1>Veja os nossos posts mais recentes!</h1>
      </C.Header>

      <C.Content>
        {loading && <p>Carregando...</p>}
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <img src={post.image} alt={post.title} />
              <p>{post.body}</p>
            </div>
          ))
        ) : (
          <div className="noPosts">
            <h3>Não foram encontrados posts</h3>
          </div>
        )}
      </C.Content>
    </C.Container>
  )
}

export default Conteudo
