import Image from "next/image"
import { H2, P } from "../../styles/text"

const Saludo = () => {
  return (
    <section className="pt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10">
        <div className="md:col-span-2 lg:col-span-1">
          <H2>
            ¡Hola!
          </H2>
          <P color='white' className='mt-3 font-medium'>
            Soy un apasionado por la automatización de procesos, actualmente busco soluciones y alternativas que puedan ser aterrizadas por medio de aplicaciones web, me gusta investigar y utilizar las tecnologías más recientes que me permitan aprender algo nuevo en cada proyecto.
          </P>
        </div>

        <div className="flex justify-end items-center">
          <Image
            src={'/assets/person.svg'}
            width={443}
            height={390.5}
            alt='picture mauricio'
          />
        </div>
      </div>
    </section>
  )
}

export default Saludo