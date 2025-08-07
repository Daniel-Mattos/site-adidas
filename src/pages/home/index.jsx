import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Container, Title, TitleHighlight, TextContent, Banner } from "./styles"
import banner from "../../assets/img/add-banner.jpg"
import { Button } from "../../components/Button"

const Home = () => {
  const navigate = useNavigate()

  const handleClickSingIn = () => {
    navigate("/login")
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            A vitória
            <br /> não é<br />
            <TitleHighlight>Sorte</TitleHighlight>
            <br />
          </Title>
          <TextContent>
            A linha Adizero focada em velocidade foi criada para corredores
            ambiciosos que buscam ultrapassar seus limites, seja no treinamento
            ou no dia da corrida.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSingIn}
          />
        </div>
        <div>
          <Banner src={banner} alt="Banner da Adidas" />
        </div>
      </Container>
    </>
  )
}
export { Home }
