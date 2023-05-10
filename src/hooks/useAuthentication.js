import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState, useEffect } from 'react'

export function useAuthentication() {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)
  const auth = getAuth()

  useEffect(() => {
    // Restante do código...
  }, [])

  function checkIfIsCancelled() {
    if (cancelled) return
  }

  // Retornar um objeto com a propriedade 'auth'
  return { auth }
}
