import * as C from './styles'
import { Link } from 'react-router-dom'
import amarelo from '../../../public/img/amarelo.jpg'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/UseDeleteDocument'

function Dashboard() {
  const { user } = useAuthValue()
  const uid = user.uid

  const { documents: posts, loading } = useFetchDocuments('posts', null, uid)

  const { deleteDocument } = useDeleteDocument('posts')

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <C.Container>
      <img src={amarelo} alt="background" className="banner" />
      <C.Content>
        <C.ContentHeader>
          <p className="title">Gerencie os seus posts</p>
          {posts && posts.length === 0 ? (
            <div className="noPosts">
              <p>Não foram encontrados posts</p>
              <Link to="/conteudo/criar">Criar primeiro post</Link>
            </div>
          ) : (
            <div className="lineHeader">
              <span>Título</span>
              <span>Ações</span>
            </div>
          )}
        </C.ContentHeader>

        {posts &&
          posts.map(post => (
            <div key={post.id} className="contentPost">
              <p>{post.title}</p>
              <div className="btn">
                <Link to={`/posts/${post.id}`}>Ver</Link>
                <Link to={`/posts/edit/${post.id}`}>Editar</Link>
                <button onClick={() => deleteDocument(post.id)}>Excluir</button>
              </div>
            </div>
          ))}
      </C.Content>
    </C.Container>
  )
}

export default Dashboard
