// import { Link } from "react-router-dom"
import { Header } from "../../components/Header"
import { Container, Title, TitleHighlight, Column } from "./styles"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
        <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
        <TitleHighlight># Ranking 5 rop da semana</TitleHighlight>
          <UserInfo
            percentual={60}
            nome="Daniel Mattos"
            image="https://avatars.githubusercontent.com/u/84470634?v=4"
          />
          <UserInfo
            percentual={30}
            nome="Daniel Mattos"
            image="https://avatars.githubusercontent.com/u/84470634?v=4"
          />
          <UserInfo
            percentual={10}
            nome="Daniel Mattos"
            image="https://avatars.githubusercontent.com/u/84470634?v=4"
          />
          <UserInfo
            percentual={90}
            nome="Daniel Mattos"
            image="https://avatars.githubusercontent.com/u/84470634?v=4"
          />
        </Column>
      </Container>
    </>
  )
}
export { Feed }
