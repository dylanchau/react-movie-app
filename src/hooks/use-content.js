/* eslint-disable react-hooks/exhaustive-deps */
import { FirebaseContext } from 'context/firebase'
import { useContext, useEffect, useState } from 'react'

const useContent = (target) => {
  const { firebase } = useContext(FirebaseContext)
  const [content, setContent] = useState([])

  useEffect(() => {
    let cancel = false

    if (!cancel) {
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
    }

    // eslint-disable-next-line no-return-assign
    return () => (cancel = true)
  }, [setContent])

  return { [target]: content }
}

export default useContent
