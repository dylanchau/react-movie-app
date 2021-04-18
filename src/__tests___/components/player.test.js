import { fireEvent, render } from '@testing-library/react'
import { Player } from 'components'
import React from 'react'

describe('<Player /> component', () => {
  it('Render player component with bunny video', () => {
    const { container, getByText, queryByTestId } = render(
      <Player>
        <Player.Button />
        <Player.Video src="/videos/bunny.mp4" />
      </Player>
    )

    expect(queryByTestId('player')).toBeFalsy()

    fireEvent.click(getByText('Play'))
    expect(queryByTestId('player')).toBeTruthy()

    fireEvent.click(queryByTestId('player'))
    expect(queryByTestId('player')).toBeFalsy()

    expect(container.firstChild).toMatchSnapshot()
  })
})
