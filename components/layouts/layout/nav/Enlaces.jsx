import Link from "next/link"
const enlaces = [
  {
    name: 'Inicio',
    path: '/'
  },
  {
    name: 'Sobre Mi',
    path: '/#sobre-mi'
  },
  {
    name: 'Portafolio',
    path: '/#portafolio'
  },
  {
    name: 'Contacto',
    path: '/#contacto'
  }
] 

const Enlaces = ({navOpen, setNavOpen}) => {
  return (
    <ul
      className={`
        flex
        flex-col
        md:flex-row
        justify-center
        items-center
        w-full
        h-full
        md:w-auto 
        fixed
        top-0
        left-0
        md:static
        bg-[#171B1D]
        md:bg-transparent
        z-30
        transition
        ${!navOpen && '-translate-x-full md:translate-x-0'}
      `}
    >
      {enlaces.map(enlace => <Enlace key={enlace.name} enlace={enlace} setNavOpen={setNavOpen} />)}
    </ul>
  )
}

const Enlace = ({enlace, setNavOpen}) => {
  const { name, path } = enlace

  return (
    <li className="cursor-hover py-2 text-center md:py-0 px-3">
      <Link onClick={() => setNavOpen(false)} href={path} className='text-gray-200'>
        {name}
      </Link>
    </li>
  )
}

export default Enlaces