import { useEffect, useState } from "react"
import { listProjectsTecnologias, listTecnologias } from "../../../data"
import { H3 } from "../../styles/text"

const Tech = ({projectId}) => {
  const [tecnologias, setTecnologias] = useState([])

  useEffect(() => {
    const consultarTecnologias = () => {
      const relations = listProjectsTecnologias.filter((relation => relation.projectId === projectId))
      const array = []
      listTecnologias.forEach(tecnologia => {
        relations.forEach(({tecnologiaId}) => tecnologia.id === tecnologiaId && array.push(tecnologia))
      })

      setTecnologias(array)
    }

    consultarTecnologias()
  }, [projectId])

  if(tecnologias.length === 0) return

  return (
    <div>
      <H3>
        Tecnologías
      </H3>

      <div className="mt-5 grid grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {tecnologias.map(tecnologia => <Tecnologia key={tecnologia.id} tecnologia={tecnologia} />)}
      </div>
    </div>
  )
}

const Tecnologia = ({tecnologia}) => {
  const { name, Icon, colorIcon } = tecnologia

  return (
    <div
      title={name}
      className="p-4 bg-gray-800 rounded-lg text-4xl grid justify-center"
    >
      <Icon
        className={colorIcon}
      />
    </div>
  )
}

export default Tech
