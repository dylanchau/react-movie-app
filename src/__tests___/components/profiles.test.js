import { render } from '@testing-library/react'
import { Profiles } from 'components'
import logo from 'logo.svg'

describe('<Profiles />', () => {
  it('Render Profiles component with populate data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who&#39;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture src={logo} data-testid="profile-picture" />
            <Profiles.Name>Test</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    )

    expect(getByText("Who's watching?")).toBeTruthy()
    expect(getByText('Test')).toBeTruthy()
    expect(getByTestId('profile-picture')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render Profiles component with populate data', () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who&#39;s watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User onClick={() => {}}>
            <Profiles.Picture data-testid="profile-misc-picture" />
            <Profiles.Name>Test</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    )

    expect(getByText("Who's watching?")).toBeTruthy()
    expect(getByText('Test')).toBeTruthy()
    expect(getByTestId('profile-misc-picture')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
