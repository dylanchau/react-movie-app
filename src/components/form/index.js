import {
  Base,
  Container,
  Error,
  Input,
  Link,
  Submit,
  Text,
  TextSmall,
  Title,
} from './styles/form'

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Form.Title = ({ children, ...restProps }) => (
  <Title {...restProps}>{children}</Title>
)

Form.Base = ({ children, ...restProps }) => (
  <Base {...restProps}>{children}</Base>
)

Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

Form.TextSmall = ({ children, ...restProps }) => (
  <TextSmall {...restProps}>{children}</TextSmall>
)

Form.Submit = ({ children, ...restProps }) => (
  <Submit {...restProps}>{children}</Submit>
)

Form.Error = ({ children, ...restProps }) => (
  <Error {...restProps}>{children}</Error>
)

Form.Link = ({ children, ...restProps }) => (
  <Link {...restProps}>{children}</Link>
)

Form.Input = ({ children, ...restProps }) => (
  <Input {...restProps}>{children}</Input>
)
