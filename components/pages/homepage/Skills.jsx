import { H2, P } from "../../styles/text"
import { listSkills } from './'

const Skills = () => {
  return (
    <section>
      <div className='text-center'>
        <H2>Habilidades</H2>
        <P>Estás son mis Habilidades</P>
      </div>

      {/* Container Skills */}
      <div className="mt-5 md:mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-8 lg:gap-10">
        {/* Skills */}
        {listSkills.map(skill => <Skill key={skill.name} skill={skill} />)}
      </div>
    </section>
  )
}

const Skill = ({skill}) => {
  const { name, Icon, colorIcon } = skill

  return (
    <div className="p-5 bg-gray-800 rounded-lg text-center shadow-md">
      <span className={`text-6xl md:text-7xl mb-2 flex justify-center ${colorIcon}`}><Icon/></span>
      <P className='font-semibold'>{name}</P>
    </div>
  )
}

export default Skills