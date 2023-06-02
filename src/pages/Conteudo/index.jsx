import amarelo from '../../../public/img/amarelo.jpg'

import * as C from './style'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

function Conteudo() {
  const { documents: posts } = useFetchDocuments('posts')

  return (
    <C.Container>
      <img src={amarelo} alt="banner" className="banner" />
      <C.Header>
        <h1>Veja os nossos posts mais recentes!</h1>
      </C.Header>

      <C.Content>
        {posts && posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              {post.image ? <img src={post.image} alt={post.title} /> : <p></p>}
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
