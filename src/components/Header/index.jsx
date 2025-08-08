import React from "react"
import {
  HeaderContainer,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  LogoPicture,
  UserPicture,
} from "./styles"
import { Button } from "../Button"
import logo from "../../assets/img/adidas-br.png"

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <HeaderContainer>
        <Row>
          <LogoPicture src={logo} alt="Logo da adidas" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input type="text" placeholder="Search..." />
              </BuscarInputContainer>
              <Menu>Live code</Menu>
              <Menu>global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/84470634?v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </HeaderContainer>
    </Wrapper>
  )
}

export { Header }
