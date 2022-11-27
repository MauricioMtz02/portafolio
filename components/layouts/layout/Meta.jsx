const Meta = ({info}) => {
  const { title, description, keywords, picture } = info

  return (
    <>
      <title>Portafolio | Mauricio Martínez - {title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={picture} />
      <meta property="og:image:url" content={picture} />
      <meta property="og:image:secure_url" content={picture} />
      <meta property="og:site_name" content={title} />
      <meta itemprop="image" content={picture} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta charSet="UTF-8"/><meta property="og:locale" content="es_MX"/>
      <meta itemprop="author" content="Mauricio Martínez Martínez" />
      <meta name="robots" content="index" />
      <meta name="theme-color" content="#14171A"/>
    </>
  )
}

export default Meta
