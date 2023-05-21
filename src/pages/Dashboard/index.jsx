import * as C from './styles'
import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

function Dashboard() {
  const { user } = useAuthValue()
  const uid = user.uid

  const { documents: posts } = useFetchDocuments('posts', null, uid)
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create">Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map(post => (
          <div key={post.id}>
            <p>{post.title}</p>
            <div>
              <Link to={`/posts/${post.id}`}>Ver</Link>
              <Link to={`/posts/edit/${post.id}`}>Editar</Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Dashboard
