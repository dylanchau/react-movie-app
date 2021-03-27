import { useContext, useEffect, useState } from 'react'
import { SelectProfileContainer } from './profiles'
import { FirebaseContext } from '../context/firebase'
import Loading from '../components/loading'

function BrowseContainer({ slies }) {
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const { firebase } = useContext(FirebaseContext)
  const user = firebase.auth().currentUser || {}

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [profile.displayName])

  // eslint-disable-next-line no-nested-ternary
  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
