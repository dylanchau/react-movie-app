import Header from '../components/header'
import Profiles from '../components/profiles'
import * as ROUTES from '../constant/routes'
import logo from '../logo.svg'

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="film" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who&#39;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
                // eslint-disable-next-line prettier/prettier
              })}
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  )
}
