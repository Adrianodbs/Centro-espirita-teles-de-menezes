import * as C from './style'
import amarelo from '../../../public/img/amarelo.jpg'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

import { useFetchDocument } from '../../hooks/useFetchDocument'

function EditPost() {
  const { id } = useParams()
  const { document: post } = useFetchDocument('posts', id)

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [formError, setFormError] = useState('')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
      setImage(post.image)
    }
  }, [post])

  const navigate = useNavigate()

  const { user } = useAuthValue()

  const { updateDocument, response } = useUpdateDocument('posts')

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

    const data = {
      title,
      image,
      body,
      uid: user.uid
    }

    updateDocument(id, data)

    //redirect to home page
    navigate('/dashboard')
  }

  return (
    <C.Container>
      <img src={amarelo} alt="background" className="background" />
      <C.Content>
        {post && (
          <>
            <h1>Editando post: {post.title}</h1>

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
                  value={image}
                  placeholder="Coloque o URL da imagem aqui"
                  onChange={e => setImage(e.target.value)}
                />
              </label>
              <p className="preview">Preview da imagem atual:</p>
              <img className="imagePreview" src={post.image} alt={post.title} />
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
              {!response.loading && <button type="submit">Editar</button>}
              {response.loading && <button type="submit">Aguarde...</button>}
              {response.error && <p>{response.error}</p>}
              {formError && <p>{formError}</p>}
            </form>
          </>
        )}
      </C.Content>
    </C.Container>
  )
}

export default EditPost
