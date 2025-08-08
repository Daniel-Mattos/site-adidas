import styled from "styled-components"

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  width: 20rem;
  margin-bottom: 1.2rem;
  line-height: 2.5rem;

  collor: #fff;
`

export const TitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.2rem;
  line-height: 2.5rem;
`
export const SubTitleLogin = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 1.1rem;
  line-height: 1.5rem;
`

export const EsqueciText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.1rem;
  opacity: 0.4;
  text-decoration-line: underline;
`
export const CriarText = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 1.1rem;
  opacity: 0.4;
  text-decoration-line: underline;
  cursor: pointer;
`

export const Wrapper = styled.div`
  max-width: 18.5rem;
  form {
    display: flex;
    flex-direction: column;
    align-items: start;
    min-width: 8rem;
    width: 20rem;
    min-height: 9rem;
    justify-content:space-between;
  }
`
export const Column = styled.div`
  flex: 1;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`
