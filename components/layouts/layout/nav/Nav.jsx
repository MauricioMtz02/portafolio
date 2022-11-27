import Link from "next/link"
import { Twirl as Hamburger } from 'hamburger-react'
import { Container } from "../../../styles/layout"
import { Enlaces, Cv } from './'
import { useState, useEffect } from "react"

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
      const scrollNav = () => {
          window.addEventListener('scroll', () => {
              const section = document.querySelector('main *')
              const ubicacion = section.getBoundingClientRect()

              if(ubicacion.top < -1){
                  if(!fixed){
                      setFixed(true)
                  }
              } else{
                  if(!fixed){
                      setFixed(false)
                  }
              }
          })
      }

      scrollNav()
  }, [fixed])

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        z-20
        w-full
        transition-all
        ${fixed ? 'bg-[#171B1D] py-2' : 'py-5'}
      `}
    >
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative z-50 md:hidden cursor-hover">
              <Hamburger toggled={navOpen} toggle={setNavOpen} color='#fff' direction="right" />
            </div>
            <Link href={'/'} className='text-gray-200 font-bold text-xl cursor-hover'>
              <span className="hidden md:inline">Mauricio Martínez</span>
              <span className="md:hidden text-2xl ml-3">MM</span>
            </Link>
          </div>

          <Enlaces
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          />

          <Cv/>
        </div>
        
      </Container>
    </nav>
  )
}

export default Nav