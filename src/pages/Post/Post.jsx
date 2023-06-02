import { useParams } from 'react-router-dom'
import { useFetchDocument } from '../../hooks/useFetchDocument'
import * as C from './style'
import amarelo from '../../../public/img/amarelo.jpg'

function Post() {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)

  return (
    <C.Container>
      <img src={amarelo} alt="banner" className="banner" />
      <C.Content>
        <div className="post">
          {post && (
            <>
              <h1>{post.title}</h1>
              {post.image ? <img src={post.image} alt={post.title} /> : <p></p>}
              <p>{post.body}</p>
            </>
          )}
        </div>
      </C.Content>
    </C.Container>
  )
}

export default Post
