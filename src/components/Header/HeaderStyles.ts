import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    
    h1{
      padding-left: .5rem;
      font: 400 'Roboto', sans-serif;
    }
  }
`
export const NewStatusButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    transition: background-color 0.2s;
  }
`