import Logo from '../assets/logo.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 p-2">
      <img src={Logo} alt="logo-nwl" />

      <nav className="flex items-center gap-5">
        <NavLink href={'/eventos'}>Eventos</NavLink>
        <NavLink href={'/participantes'}>Participantes</NavLink>
      </nav>
    </div>
  )
}
