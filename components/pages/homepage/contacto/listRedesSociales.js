import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

const listRedesSociales = [
  {
    text: '@MauricioMtz02',
    link: 'https://github.com/MauricioMtz02',
    Icon: <AiFillGithub className='text-6xl mx-auto mb-2' />
  },
  {
    text: '@Mauricio Martínez',
    link: 'https://www.linkedin.com/in/mauricio-mart%C3%ADnez-916b80226/',
    Icon: <AiFillLinkedin className='text-6xl mx-auto mb-2 text-[#037BB9]' />
  },
  {
    text: '@mtzmau02',
    link: 'https://www.instagram.com/mtzmau02/',
    Icon: <AiOutlineInstagram className='text-6xl mx-auto mb-2 text-white bg-gradient-to-tr from-[#EFB605] via-[#E81F54] to-[#7312F5] rounded-2xl p-1' />
  },
  {
    text: '(+52) 271 255 34 44',
    link: 'https://api.whatsapp.com/send?phone=522712553444&text=¡Hola Mauricio!',
    Icon: <AiOutlineWhatsApp className='text-6xl mx-auto mb-2 text-white bg-gradient-to-tr from-[#2BCD47] to-[#50E467] rounded-2xl p-2' />
  },
  {
    text: 'mtz0mau2002@gmail.com',
    link: 'mailto:mtz0mau2002@gmail.com',
    Icon: <AiOutlineMail className='text-6xl mx-auto mb-2 text-white' />
  }
]

export default listRedesSociales