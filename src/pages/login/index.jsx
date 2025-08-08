import { MdEmail, MdLock } from "react-icons/md"
import { Header } from "../../components/Header"
import {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  EsqueciText,
  CriarText,
  Wrapper,
  Column,
  Row,
} from "./styles"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"

const Login = () => {

 const navigate = useNavigate()

  const handleClickSingIn = () => {
    navigate("/feed")
  }

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            Conheça as Novas Coleções
            <br />
            Buscando por Tênis, Roupas e Acessórios?
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login para acessar sua conta</SubTitleLogin>
            <form>
              <Input placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title="Entrar" variant="secondary" onClick={handleClickSingIn} type="button"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta ?</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
export { Login }
