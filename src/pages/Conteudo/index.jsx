import amarelo from '../../../public/img/amarelo.jpg'

import * as C from './style'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

function Conteudo() {
  const { documents: posts } = useFetchDocuments('posts')

  function extractVideoId(url) {
    const regex =
      /(?:\/|%3D|v=|vi=|v%3D|youtu.be%2F|\/embed\/|\/v\/|https:\/\/www.youtube.com\/watch\?v=|https:\/\/www.youtube.com\/embed\/|https:\/\/youtu.be\/|https:\/\/www.youtube.com\/v\/|https:\/\/m.youtube.com\/watch?v=)([^#\&\?]*).*/

    const match = url.match(regex)
    return match && match[1] ? match[1] : null
  }

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
              {post.videoUrl ? (
                <iframe
                  className="video"
                  title={post.title}
                  src={`https://www.youtube.com/embed/${extractVideoId(
                    post.videoUrl
                  )}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : null}
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
