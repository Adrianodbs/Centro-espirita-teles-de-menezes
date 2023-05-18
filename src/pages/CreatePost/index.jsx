import * as C from './style'
import amarelo from '../../../public/img/amarelo.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

function CreatePost() {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [formError, setFormError] = useState('')

  const navigate = useNavigate()

  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument('posts')

  function handleSubmit(e) {
    e.preventDefault()
    setFormError('')

    //Validate URL
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
    }

    //Checar todos os valores
    if (!title || !image || !body) {
      setFormError('Por favor preencha todos os campos!')
    }

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      uid: user.uid
    })

    //redirect to home page
    navigate('/conteudo')
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
            <textarea
              type="text"
              required
              value={body}
              placeholder="Coloque aqui o conteúdo"
              onChange={e => setBody(e.target.value)}
            ></textarea>
          </label>
          {!response.loading && <button type="submit">Publicar</button>}
          {response.loading && <button type="submit">Aguarde...</button>}
          {response.error && <p>{response.error}</p>}
          {formError && <p>{formError}</p>}
        </form>
      </C.Content>
    </C.Container>
  )
}

export default CreatePost
