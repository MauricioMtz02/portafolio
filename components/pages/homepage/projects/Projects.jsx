import { Splide } from '@splidejs/react-splide'
import { CgScrollH } from 'react-icons/cg'
import { H2, P } from "../../../styles/text"
import { Project } from './'

const Projects = ({projects}) => {
  return (
    <section>
      <div>
        <H2>Proyectos</H2>
        <P className='flex items-center'><span className="mr-2">Desliza</span> <CgScrollH/></P>
      </div>

      <div className="mt-5 md:mt-10">
        <Splide
          options={{
            gap: '3rem',
            arrows: false,
            pagination: true,
            mediaQuery: 'min',
            breakpoints: {
              768: {
                perPage: 2
              },
              1600: {
                perPage: 3
              }
            }
          }}
          aria-label="Mis Proyectos"
        >
          {projects.map(project => <Project key={project.id} project={project} />)}
        </Splide>
      </div>
    </section>
  )
}

export default Projects