import { fireEvent, render } from '@testing-library/react'
import { Card, Player } from 'components'
import React from 'react'

const category = 'series'

const slideRows = [
  {
    title: 'Documentaries',
    data: [
      {
        genre: 'documentaries',
        maturity: '18',
        slug: 'tiger-king',
        description: 'Tiger King description',
        id: '07adcf19-517f-41b4-8f8b-04fee694bce1',
        title: 'Tiger King',
        docId: 'IcRxJBanzE7nmIp2GMGb',
      },
    ],
  },
  {
    title: 'Feel Good',
    data: [
      {
        title: 'Juno',
        genre: 'feel-good',
        description: 'Juno description',
        maturity: '0',
        id: 'a938b5a6-fe25-4a06-8050-353bc7146ccd',
        slug: 'juno',
        docId: '4JDgdf5vE0K3YrW9ZnbP',
      },
    ],
  },
]

const Default = () => (
  <Card.Group>
    {slideRows.map((slide) => (
      <Card key={`${category}-${slide.title.toLowerCase()}`}>
        <Card.Tittle>{slide.title}</Card.Tittle>
        <Card.Entities>
          {slide.data.map((item) => (
            <Card.Item key={item.docId} item={item} data-testid={item.docId}>
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
)

describe('<Card /> component', () => {
  it('Render card component and toggle card item', () => {
    const {
      container,
      getByText,
      queryByTestId,
      getByAltText,
      queryByText,
    } = render(<Default />)

    expect(getByText('Documentaries')).toBeTruthy()
    expect(getByText('Feel Good')).toBeTruthy()

    fireEvent.mouseOver(queryByTestId('IcRxJBanzE7nmIp2GMGb'))
    expect(getByText('Tiger King')).toBeTruthy()
    expect(getByText('Tiger King description')).toBeTruthy()
    fireEvent.mouseOver(queryByTestId('4JDgdf5vE0K3YrW9ZnbP'))
    expect(getByText('Juno')).toBeTruthy()
    expect(getByText('Juno description')).toBeTruthy()

    fireEvent.click(queryByTestId('IcRxJBanzE7nmIp2GMGb'))
    expect(getByText('18')).toBeTruthy()
    fireEvent.click(getByAltText('Close'))
    expect(queryByText('18')).toBeFalsy()

    fireEvent.click(queryByTestId('4JDgdf5vE0K3YrW9ZnbP'))
    expect(getByText('PG')).toBeTruthy()
    fireEvent.click(getByAltText('Close'))
    expect(queryByText('PG')).toBeFalsy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
