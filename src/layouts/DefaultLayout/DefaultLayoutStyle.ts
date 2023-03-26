import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 0 auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-700']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`