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
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../services/api"
import * as yup from "yup"
import { IFormData } from "./types"

const corIcon = `#8647AD`

const schema = yup
  .object({
    email: yup.string().email("email invalido").required("campo obrigatorio"),
    password: yup
      .string()
      .min(6, "no minimo 3 caract")
      .required("campo obrigatorio"),
  })
  .required()

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      )
      if (data.length === 1) {
        navigate("/feed")
      } else {
        alert("erro ao fazer login")
      }
    } catch {
      alert("erro")
    }
  }

  const navigate = useNavigate()

  const handleClickRegister = () => {
    navigate("/register")
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="email"
                errorMessage={errors?.email?.message}
                placeholder="E-mail"
                leftIcon={<MdEmail color={corIcon} />}
              />
              <Input
                control={control}
                name="password"
                errorMessage={errors?.password?.message}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock color={corIcon} />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={handleClickRegister}>Criar conta ?</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}
export { Login }
