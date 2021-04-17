import { Card, Header, Loading, Player } from 'components'
import * as ROUTES from 'constant/routes'
import { SelectProfileContainer } from 'containers/profiles'
import { FirebaseContext } from 'context/firebase'
import Fuse from 'fuse.js'
import logo from 'logo.svg'
import { useContext, useEffect, useState } from 'react'

import { FooterContainer } from './footer'

function BrowseContainer({ slies }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)
  const [category, setCategogy] = useState('films')
  const [slideRows, setSlideRows] = useState([])

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

  useEffect(() => {
    setSlideRows(slies[category])
  }, [slies, category])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.title', 'data.genre'],
    })

    const result = fuse.search(searchTerm).map(({ item }) => item)
    if (slideRows.length > 0 && searchTerm.length > 3 && result.length > 0) {
      setSlideRows(result)
    } else {
      setSlideRows(slies[category])
    }
  }, [searchTerm])

  // eslint-disable-next-line no-nested-ternary
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" notShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="film" />
            <Header.TextLink
              onClick={() => setCategogy('series')}
              active={category === 'series' ? 'true' : 'false'}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setCategogy('films')}
              active={category === 'films' ? 'true' : 'false'}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he is part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slide) => (
          <Card key={`${category}-${slide.title.toLowerCase()}`}>
            <Card.Tittle>{slide.title}</Card.Tittle>
            <Card.Entities>
              {slide.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTittle>{item.title}</Card.SubTittle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  )
}

export default BrowseContainer
