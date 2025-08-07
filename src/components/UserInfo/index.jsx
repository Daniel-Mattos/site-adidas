import React from "react"

import { Container, UserPicture, NameText, Progress } from "./styles"

const UserInfo = ({ nome, percentual, image }) => {
  return (
    <Container>
      <UserPicture src={image} alt={`Foto de perfil de ${nome}`} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  )
}

export { UserInfo }
