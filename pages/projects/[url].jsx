import Head from "next/head"
import Image from "next/image"
import { Tech } from "../../components/pages/project"
import { Button } from "../../components/styles/buttons"
import { Container } from "../../components/styles/layout"
import { H2, P } from "../../components/styles/text"
import { listProjects } from "../../data"
import { useDB } from "../../hooks"
import { Layout } from "../../layouts"

export default function ProjectPage({project}) {
  const { getRolById } = useDB()
  const { id, title, picture, rolId, description, content, link } = project
  const { name: rol } = getRolById(rolId)

  return (
    <div className="py-28 md:py-32 min-h-[42rem] md:min-h-[50rem]">
      <Head>
        <title>Portafolio | Mauricio Martínez - {title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={picture} />
        <meta property="og:image:url" content={picture} />
        <meta property="og:image:secure_url" content={picture} />
        <meta property="og:site_name" content={title} />
        <meta itemprop="image" content={picture} />
      </Head>
      <Container>
        <div className="flex justify-between">
          <div>
            <H2>{title}</H2>
            <P>{rol}</P>
          </div>

          <div>
            {link && (
              <Button color='light' onClick={() => window.open(link, '_blank')}>Visitar</Button>
            )}
          </div>
        </div>

        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <Image
              src={`/assets/${picture}`}
              alt={`picture ${title}`}
              width={600}
              height={400}
              className='rounded-lg shadow-sm'
            />
          </div>

          <section>
            <Tech
              projectId={id}
            />
          </section>
        </div>

        <section className="mt-10 grid grid-cols-1 xl:grid-cols-2">
          <div className="opacity-80">
            <P>{description}</P>

            <div className="text-gray-100 text-lg leading-9 mt-10">
              <p dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

ProjectPage.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = listProjects.map(({url}) => {
    return { params: { url } }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params: { url }}) {
  const project = listProjects.filter(p => p.url === url)[0] ?? {}

  return {
    // Passed to the page component as props
    props: { project }
  }
}
