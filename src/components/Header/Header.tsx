import { HeaderContainer, NewStatusButton } from './HeaderStyles'
import { FiRss } from "react-icons/fi";

import IgniteLogo from '../../assets/ignite-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <FiRss size={32}/>
        <h1>Repo Feed</h1>
      </div>
      <NewStatusButton>Nova atualização</NewStatusButton>
    </HeaderContainer>
  )
}
