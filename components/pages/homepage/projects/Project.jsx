import { SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import { cutContent } from '../../../../helpers'
import { Button } from '../../../styles/buttons'
import { P } from '../../../styles/text'

const Project = ({project}) => {
  const { title, description, picture, link, url } = project

  return (
    <SplideSlide>
      <div className="bg-gray-800 pb-5 px-5 rounded-lg shadow-md">
        <Header/>

        {/* Image */}
        <div className='relative'>
          <Image
            src={`/assets/${picture}`}
            alt='punto de venta'
            width={600}
            height={400}
            className='max-w-full rounded-md'
          />
        </div>
        {/* <div className='rounded-md bg-sky-400 p-5 w-72 h-48 mx-auto'></div> */}

        {/* Info */}
        <div className='mt-5'>
          <h3 className='text-gray-100 font-bold text-2xl'>{title}</h3>
          <P title={description} className='opacity-75'>{cutContent(description, 100)}</P>
        </div>

        <div className='mt-5 flex justify-between'>
          <Button href={`/projects/${url}`}>Leer Más</Button>
          {link && (
            <Button color='light' onClick={() => window.open(link, '_blank')}>Visitar</Button>
          )}
        </div>
      </div>
    </SplideSlide>
  )
}

const Header = () => {
  return (
    <div className='py-3'>
      <div className='flex'>
        <div className='rounded-full w-2 h-2 bg-red-500 mr-2'></div>
        <div className='rounded-full w-2 h-2 bg-yellow-500 mr-2'></div>
        <div className='rounded-full w-2 h-2 bg-green-500'></div>
      </div>
    </div>
  )
}

export default Project