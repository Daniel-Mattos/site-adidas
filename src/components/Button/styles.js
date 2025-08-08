import styled, { css } from "styled-components"

export const ButtonContainer = styled.button`
  background-color: #565656;
  border-radius: 1.5rem;
  position: relative;

  color: #fff;
  padding: 0.1rem 0.75rem;
  min-width: 7.5rem;
  width: 100%;
  margin: 0 0.5rem;
  cursor: pointer;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 6.5rem;
      height: 2.5rem;

      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 1.5rem;
      }
    `}
`
