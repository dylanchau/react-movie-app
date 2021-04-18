import { fireEvent, render } from '@testing-library/react'
import { Accordion } from 'components'
import faqsData from 'fixtures/faqs.json'
import React from 'react'

const Default = () => (
  <Accordion>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    {faqsData.map((item) => (
      <Accordion.Item key={item.id}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.body}</Accordion.Body>
      </Accordion.Item>
    ))}
  </Accordion>
)

describe('<Accordion />', () => {
  it('Reder accordion compponent', () => {
    const { container, queryByText } = render(<Default />)

    expect(queryByText('What is Netflix?')).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Toggle accordion compponent', () => {
    const { container, queryByText } = render(<Default />)

    const expectedText =
      'Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.'

    fireEvent.click(queryByText('How much does Netflix cost?'))
    expect(queryByText(expectedText)).toBeTruthy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
