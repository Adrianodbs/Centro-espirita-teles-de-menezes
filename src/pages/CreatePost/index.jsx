import * as C from './style'
import amarelo from '../../../public/img/amarelo.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

function CreatePost() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState('')
  const [formError, setFormError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <C.Container>
      <img src={amarelo} alt="background" className="background" />
      <C.Content>
        <h1>Criar post</h1>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input
              type="text"
              required
              value={title}
              placeholder="Coloque o título aqui"
              onChange={e => setTitle(e.target.value)}
            />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input
              type="text"
              required
              value={image}
              placeholder="Coloque o URL da imagem aqui"
              onChange={e => setImage(e.target.value)}
            />
          </label>
          <label>
            <span>Conteúdo:</span>
            <input
              type="text"
              required
              value={body}
              placeholder="Coloque aqui o conteúdo"
              onChange={e => setBody(e.target.value)}
            />
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              required
              value={tags}
              placeholder="Insira as tags separadas por vírgula"
              onChange={e => setTags(e.target.value)}
            />
          </label>
          <button>Publicar</button>
        </form>
      </C.Content>
    </C.Container>
  )
}

export default CreatePost
