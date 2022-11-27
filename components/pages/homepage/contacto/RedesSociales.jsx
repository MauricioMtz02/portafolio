import { listRedesSociales } from './'

const RedesSociales = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 md:gap-8">
      {listRedesSociales.map(redSocial => <RedSocial key={redSocial.link} redSocial={redSocial} />)}
    </div>
  )
}

const RedSocial = ({redSocial}) => {
  const { text, link, Icon } = redSocial

  return (
    <a href={link} target='_blank' rel="noreferrer" className="p-5 bg-gray-800 rounded-lg text-gray-100 text-center shadow-sm last:col-span-2 cursor-hover">
      {Icon}
      <p className='text-sm md:text-base'>{text}</p>
    </a>
  )
}

export default RedesSociales