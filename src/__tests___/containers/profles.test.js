import { fireEvent, render } from '@testing-library/react'
import { SelectProfileContainer } from 'containers/profiles'
import { MemoryRouter } from 'react-router-dom'

const USER = {
  displayName: 'Test',
  photoURL: 'test.png',
}

describe('<SelectProfileContainer />', () => {
  it('Profile container', () => {
    const mockSetProfileFn = jest.fn()
    const {
      container,
      getByText,
      getByAltText,
      getByTestId,
    } = render(
      <SelectProfileContainer user={USER} setProfile={mockSetProfileFn} />,
      { wrapper: MemoryRouter }
    )

    expect(getByAltText('film')).toBeTruthy()
    expect(getByText("Who's watching?")).toBeTruthy()
    expect(getByText('Test')).toBeTruthy()

    fireEvent.click(getByTestId('user-profile'))
    expect(mockSetProfileFn).toHaveBeenCalledTimes(1)

    expect(container.firstChild).toMatchSnapshot()
  })
})
