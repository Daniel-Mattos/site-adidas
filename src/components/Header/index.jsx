import React from "react"
import {
  HeaderContainer,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
} from "./styles"
import { Button } from "../Button"

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
            <img src="/logo.png" alt="Logo" />
          <BuscarInputContainer>
            <Input type="text" placeholder="Search..." />
          </BuscarInputContainer>
          <Menu>Live code</Menu>
          <Menu>global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar" />
          <Button title="Cadastrar" />
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export { Header }
