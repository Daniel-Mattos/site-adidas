import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 80%;
  height: 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BuscarInputContainer = styled.div`
  width: 8rem;
  height: 2.5rem;
  background: #2d2d37;
  border-radius: 0.2rem;
  padding: 0.2rem 0.5rem;
  margin: 0 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
`
export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fff;
  text-decoration: none;
  margin: 0 0.5rem;
`

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.55rem;
  border: 2px solid #fff;
`
export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
`
