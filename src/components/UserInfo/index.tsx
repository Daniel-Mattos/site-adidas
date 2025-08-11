import React from "react"

import { Container, UserPicture, NameText, Progress } from "./styles"
import { IUserInfo } from "./types"

const UserInfo = ({ nome, percentual, image }: IUserInfo) => {
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
