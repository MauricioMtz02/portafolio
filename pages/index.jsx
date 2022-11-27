import Head from "next/head"
import { Contacto, Header, Projects, Saludo, Skills } from "../components/pages/homepage"
import { Container } from "../components/styles/layout"
import { listProjects } from "../data"
import { Layout } from "../layouts"

const info = {
  title: 'Desarrollador Front-End',
  description: 'Soy un apasionado por la automatización de procesos, actualmente busco soluciones y alternativas que puedan ser aterrizadas por medio de aplicaciones web.',
  keywords: 'freelance, desarrollo, diseño, frontend, backend, fullstack, web, sistema, aplicacion',
  picture: '/assets/profile.jpg'
}

export default function HomePage({projects}) {
  const { title, description, keywords, picture } = info

  return (
    <div>
      <Head>
        <title>Portafolio | Mauricio Martínez - {title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:image" content={picture} />
        <meta property="og:image:url" content={picture} />
        <meta property="og:image:secure_url" content={picture} />
        <meta property="og:site_name" content={title} />
        <meta itemprop="image" content={picture} />
      </Head>
      <div className="pb-5 relative">
        <Header/>
        
        <Container>
          <div className="grid grid-cols-1 gap-20 md:gap-32">
            <div id="sobre-mi">
              <Saludo/>
            </div>

            <Skills/>

            <div id="portafolio">
              <Projects
                projects={projects}
              />
            </div>

            <div id="contacto">
              <Contacto/>
            </div>
          </div>
        </Container>
        
      </div>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props : { projects: listProjects }
  }
}