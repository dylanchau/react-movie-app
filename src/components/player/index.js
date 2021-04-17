/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/media-has-caption */
import { createContext, useContext, useState } from 'react'
import ReactDom from 'react-dom'

import { Button, Close, Container, Inner, Overlay } from './styles/player'

const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return showPlayer
    ? ReactDom.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    <Button onClick={() => setShowPlayer((prev) => !prev)} {...restProps}>
      Play
    </Button>
  )
}
