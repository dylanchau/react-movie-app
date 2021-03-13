import styled from 'styled-components/macro'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  box-sizing: border-box;
  border-radius: 5px;
  color: white;
  min-height: 660px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 28px;
`

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`

export const Error = styled.div`
  background: red;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Link = styled(RouterLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
`

export const Submit = styled.button`
  height: 50px;
  background: red;
  color: white;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;

  &:hover {
    background: #f40612;
  }
  &:disabled {
    opacity: 0.5;
  }
`

export const Input = styled.input`
  padding: 5px 20px;
  margin-bottom: 20px;
  color: black;
  background: white;
  border: 0;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`
