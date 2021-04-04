import BrowseContainer from 'containers/browse'
import { useContent } from 'hooks'
import { selectFilter } from 'utils'

export default function Browse(props) {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slies = selectFilter({ series, films })

  return <BrowseContainer slies={slies} />
}
