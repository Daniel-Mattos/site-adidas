import React from "react"
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles"
import { FiThumbsUp } from "react-icons/fi"
import banner from "../../assets/img/backgroundAdidas.png"


const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src={banner} alt="Banner da Adidas"/>
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/84470634?v=4"/>
          <div>
            <h4>Daniel Almeida</h4>
            <p>Há 10 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto Adizero</h4>
          <p>Projeto feito com React</p>
        </PostInfo>
        <HasInfo>
            <h4>#html #css #js</h4>
            <p>
                <FiThumbsUp/> 10
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}
export { Card }
