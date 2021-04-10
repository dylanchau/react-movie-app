import { createContext, useContext, useState } from 'react'

import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from './styles/accordion'

const ToggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleContext.Provider value={{ toggle, setToggle }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggle, setToggle } = useContext(ToggleContext)

  return (
    <Header onClick={() => setToggle((preState) => !preState)} {...restProps}>
      {children}
      {toggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggle } = useContext(ToggleContext)
  return toggle ? <Body {...restProps}>{children}</Body> : null
}
