import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line sort-imports
import App from './app'
import { GlobalStyle } from './global-styles'
// eslint-disable-next-line sort-imports
import 'normalize.css'
import { firebase } from './lib/firebase.prod'
import { FirebaseContext } from './context/firebase'

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)
