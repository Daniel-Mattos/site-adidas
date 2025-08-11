import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  width: 23.5rem;

`
export const CardRigth = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  min-width: 8rem;
  width: 23.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    min-width: 8rem;
    width: 20rem;
    min-height: 12rem;
    justify-content:space-between;
  }
`
export const Text = styled.p`
  font-size: 1.1rem;
  font-style: normal;
  opacity: 0.6;
  font-weight: 400;
  margin: 0.5rem 0;
  width: 90%;
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
export const TextHightlight = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  color: #23dd7a;
  cursor: pointer;
`

export const RegisterText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`
