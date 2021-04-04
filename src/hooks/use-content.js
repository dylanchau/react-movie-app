/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from 'context/firebase'

const useContent = (target) => {
  const { firebase } = useContext(FirebaseContext)
  const [content, setContent] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((res) => {
        const allContent = res.docs.map((obj) => ({
          ...obj.data(),
          docId: obj.id,
        }))
        setContent(allContent)
      })
      .catch((err) => console.log(err.message))
  }, [])

  return { [target]: content }
}

export default useContent
