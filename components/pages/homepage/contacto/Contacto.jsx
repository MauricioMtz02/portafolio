import { H2, P } from "../../../styles/text"
import { Form, RedesSociales } from "./"

const Contacto = () => {
  return (
    <section>
      <div className="text-center">
        <H2>Contacto</H2>
        <P>Medios de Contacto</P>
      </div>

      <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-10 xl:gap-16">
        {/* Formulario */}
        <div className="xl:col-span-2">
          <Form/>
        </div>

        {/* Redes Sociales */}
        <div className="xl:col-span-4">
          <RedesSociales/>
        </div>
      </div>
    </section>
  )
}

export default Contacto
