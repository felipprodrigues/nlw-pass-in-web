import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <div className='flex items-center gap-5 p-2'>
      <img src={Logo} alt="logo-nwl" />

      <nav className='flex items-center gap-5'>
        <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
        <a href="" className="font-medium text-sm">Participantes</a>
      </nav>
    </div>
  )
}
