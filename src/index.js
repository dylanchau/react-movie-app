// eslint-disable-next-line sort-imports
import 'normalize.css'

import React from 'react'
import ReactDOM from 'react-dom'

// eslint-disable-next-line sort-imports
import App from './app'
import { FirebaseContext } from './context/firebase'
import { GlobalStyle } from './global-styles'
import { firebase } from './lib/firebase.prod'

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)
