import { LockBody, Picture, ReleaseBody, Spinner } from './styles/loading'

function Loading({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} alt={src} />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps }) {
  return <ReleaseBody {...restProps} />
}

export default Loading
