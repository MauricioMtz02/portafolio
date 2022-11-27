import Head from "next/head"
import { Container } from "../components/styles/layout"
import { DiAtom } from 'react-icons/di'
import { Button } from "../components/styles/buttons"

export default function page404() {
  return (
    <div className="bg-[#171B1D] min-h-screen flex justify-center items-center">
      <Head>
        <title>Portafolio - Error 404</title>
        <meta name="theme-color" content="#14171A"/>
      </Head>
      <Container>
        <div className="text-center">
          <h1 className="flex justify-center items-center text-gray-100 text-9xl">
            <span>4</span>
            <DiAtom className="text-sky-400 translate-y-3"/>
            <span>4</span>
          </h1>
          <p className="text-xl my-5 text-gray-100">Error 404 - Página no encontrada</p>
          <Button href={'/'}>Volver</Button>
        </div>
      </Container>
    </div>
  )
}

page404.getLayout = function getLayout(page) {
  return (
    <>
      {page}
    </>
  )
}