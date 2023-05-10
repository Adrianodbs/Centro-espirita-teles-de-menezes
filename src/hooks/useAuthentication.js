import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'

export function useAuthentication() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)
  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) return
  }

  const logout = () => {
    checkIfIsCancelled()

    signOut(auth)
  }

  const login = async data => {
    checkIfIsCancelled()

    setLoading(true)
    setError(false)

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password)
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)
      console.log(error.message.includes('user-not'))

      let systemErrorMessage

      if (error.message.includes('user-not-found')) {
        systemErrorMessage = 'Usuário não encontrado.'
      } else if (error.message.includes('wrong-password')) {
        systemErrorMessage = 'Senha incorreta.'
      } else {
        systemErrorMessage = 'Ocorreu um erro, por favor tenta mais tarde.'
      }

      console.log(systemErrorMessage)

      setError(systemErrorMessage)
    }

    console.log(error)

    setLoading(false)
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { auth, error, logout, login, loading }
}
