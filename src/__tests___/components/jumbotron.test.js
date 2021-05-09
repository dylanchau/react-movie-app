import { render } from '@testing-library/react'
import { Jumbotron } from 'components'
import jumboData from 'fixtures/jumbo.json'

describe('<Jumbotron /> component', () => {
  it('Render jumbotron component', () => {
    const { container, getByText, getByAltText } = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    )

    expect(getByText('Enjoy on your TV.')).toBeTruthy()
    expect(
      getByText('Save your data and watch all your favourites offline.')
    ).toBeTruthy()
    expect(getByAltText('Watch on mobile')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
