import React from 'react'
import ReactDOM from 'react-dom'
// eslint-disable-next-line sort-imports
import App from './app'
import { GlobalStyle } from './global-styles'
// eslint-disable-next-line sort-imports
import 'normalize.css'

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)
