import { render } from '@testing-library/react'
import { Loading } from 'components'

describe('<Loading /> component', () => {
  it('Render loading component', () => {
    const { container, getByAltText, getByTestId } = render(
      <Loading src="test" data-testid="loading" />
    )

    expect(getByTestId('loading')).toBeTruthy()
    expect(getByAltText('test')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render <Loading.ReleaseBody />', () => {
    const { container } = render(<Loading.ReleaseBody />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
