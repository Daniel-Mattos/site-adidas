import React from "react"

import {
  Container,
  Title,
  CardRigth,
  Text,
  TextHightlight,
  RegisterText
} from "./styles"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { MdLock, MdEmail, MdPerson } from "react-icons/md"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { Button } from "../../components/Button"

const corIcon = `#8647AD`

const schema = yup
  .object({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required()

const Register = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  })

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.post(`/users`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      if (data.id) {
        alert("Cadastro realizado com sucesso!")
        navigate("/login")
      }
    } catch (e) {
      alert("Não foi possível fazer o cadastro. Verifique se o e-mail já está em uso.")
    }
  }

  const handleClickLogin = () => {
    navigate("/login")
  }

  return (
    <>
      <Header />
      <Container>
        <Title>
          A plataforma para você usar o que os atletas usam, dominar as principais
          utilização dos atetlas e se tornar mais rápido um atleta profissional.
        </Title>
        <CardRigth>
          <Title>Veja agora como funciona</Title>
          <Text>Crie sua conta e make the change.</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              control={control}
              name="name"
              errorMessage={errors?.name?.message}
              placeholder="Nome completo"
              type="text"
              leftIcon={<MdPerson color={corIcon}/>}
            />
            <Input
              control={control}
              name="email"
              errorMessage={errors?.email?.message}
              placeholder="E-mail"
              type="email"
              leftIcon={<MdEmail color={corIcon}/>}
            />
            <Input
              control={control}
              name="password"
              errorMessage={errors?.password?.message}
              placeholder="Senha"
              type="password"
              leftIcon={<MdLock color={corIcon}/>}
            />
            <Button title="Criar minha conta" variant="secondary" type="submit" />
          </form>
          <Text>
            Ao clicar em "criar minha conta grátis", declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </Text>
          <RegisterText>
            Já tenho conta. <TextHightlight onClick={handleClickLogin}>Fazer login</TextHightlight>
          </RegisterText>
        </CardRigth>
      </Container>
    </>
  )
}

export { Register }
