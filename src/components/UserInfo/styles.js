import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
`
export const UserPicture = styled.img`
    width:2rem;
    height:2rem;
    border-radius:1.5rem;
    border:3px solid #fff;
    margin-right:.75rem;
`
export const NameText = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #fff;
`
export const Progress = styled.div`
    width: 11.5rem;
    height: 6px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
`