import styled from 'styled-components'

export const PostContainer = styled.section`
  background: ${(props) => props.theme['gray-800']};
  weight: 100%;
  height: 30rem;
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`

export const PostHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.3rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
export const PostTitle = styled.div`
    display: flex;
    flex-direction: column;

    strong{
      line-height: 1.6;
      color: ${(props) => props.theme['gray-100']};
    }

    span {
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme['gray-400']};
    }
`
export const PostContent = styled.div`
  p {
    margin-top: 1rem;
  }

  a {
    font-weight: bold;
    color: ${(props) => props.theme['blue-500']};
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme['blue-300']};
    }
  }
`

export const PostFooter = styled.footer`
  display: flex;
  justify-content: space-between;

  button {
    height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 2.5rem;
  border-radius: 6px;
  cursor: pointer;
  align-self: end;

  &:hover {
    background-color: ${(props) => props.theme['blue-700']};
    transition: background-color 0.2s;
  }
  }
`
export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TagWrapper = styled.div`
  margin: .5rem 0;

  strong {
    display: block;
    margin: 0.5rem 0;
  }
`

interface TagProps {
  variant?: 'bug' | 'feature' | 'tech'
}

export const Tag = styled.span<TagProps>`
    display: inline;
    background: ${(props) => checkColorTag(props)};
    color: ${(props) => props.theme['gray-700']};
    border-radius: 5px;
    line-height: 1.6;
    padding: 0.4rem;
    margin-right: 0.3rem;
    letter-spacing: 2px;
    font-family: 'Roboto Mono',monospace;
    text-transform: uppercase;
    font-weight: bold;
`

function checkColorTag(props: any):string {
  var color = '';
  switch (props.variant) {
    case 'bug':
      color = props.theme['red-700']
      break
    case 'feature':
      color = props.theme['green-700']
      break
    case 'tech':
      color = props.theme['blue-700']
      break
    default:
      color = props.theme['gray-500']
      break
  }

  return color
}
