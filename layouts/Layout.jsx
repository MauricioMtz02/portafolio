import Head from "next/head"
import { Cursor, Nav } from "../components/layouts/layout"

const Layout = ({children}) => {
  return (
    <div className="overflow-hidden relative bg-gray-100 min-h-screen">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta charSet="UTF-8"/><meta property="og:locale" content="es_MX"/>
        <meta itemprop="author" content="Mauricio Martínez Martínez" />
        <meta name="robots" content="index" />
        <meta name="theme-color" content="#14171A"/>
      </Head>
      <header>
        <Nav/>
      </header>

      <main className="bg-[#171B1D] pb-5 md:pb-10">
        {children}
      </main>

      <footer className="py-5 md:py-10 bg-gray-800 text-gray-400 font-bold text-center">
        Copyright &copy; | By Mauricio Martínez
      </footer>

      <Cursor/>
    </div>
  )
}

export default Layout