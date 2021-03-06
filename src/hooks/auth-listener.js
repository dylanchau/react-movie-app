import { FirebaseContext } from 'context/firebase'
import { useContext, useEffect, useState } from 'react'

export default function useAuthListener() {
  const { firebase } = useContext(FirebaseContext)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')))

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser))
        setUser(authUser)
      } else {
        localStorage.removeItem('authUser')
        setUser(null)
      }
    })

    return () => listener()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return user
}
