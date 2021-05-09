import { fireEvent, render } from '@testing-library/react'
import { Header } from 'components'
import logo from 'logo.svg'
import { MemoryRouter } from 'react-router-dom'

describe('<Header /> component', () => {
  it('Render header component - only include Logo and Button', () => {
    const { container, getByText, getByAltText } = render(
      <Header>
        <Header.Frame>
          <Header.Logo to="#" alt="Netflix" src={logo} />
          <Header.ButtonLink to="#">Sign In</Header.ButtonLink>
        </Header.Frame>
      </Header>,
      { wrapper: MemoryRouter }
    )

    expect(getByAltText('Netflix')).toBeTruthy()
    expect(getByText('Sign In')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render header component full populate', () => {
    const { container, getByText, getByAltText, getByTestId } = render(
      <Header src="joker1" notShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to="#" src={logo} alt="film" />
            <Header.TextLink onClick={() => {}} active>
              Series
            </Header.TextLink>
            <Header.TextLink onClick={() => {}}>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Search searchTerm="Joker" setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src="" />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src="" />
                  <Header.TextLink>Tester</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={() => {}}>Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>Header feature text</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>,
      { wrapper: MemoryRouter }
    )

    expect(getByTestId('search-input')).toBeTruthy()
    expect(getByTestId('search-input').value).toBe('Joker')
    fireEvent.change(getByTestId('search-input'), {
      target: { value: 'Simpsons' },
    })
    fireEvent.click(getByTestId('search-click'))

    expect(getByAltText('film')).toBeTruthy()
    expect(getByText('Series')).toBeTruthy()
    expect(getByText('Films')).toBeTruthy()
    expect(getByText('Tester')).toBeTruthy()
    expect(getByText('Sign Out')).toBeTruthy()
    expect(getByText('Watch Joker Now')).toBeTruthy()
    expect(getByText('Header feature text')).toBeTruthy()
    expect(getByText('Play')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
