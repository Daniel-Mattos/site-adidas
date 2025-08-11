import styled from "styled-components"
import { IColumn } from "./types"

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;

  display: flex;
  flex-direction: row;
  juustify-content: space-between;
`
export const Title = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;

  collor: #fff;
`

export const TitleHighlight = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;

  color: #ffffff78;
`
export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 1.5rem;
`
