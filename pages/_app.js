import { CursorProvider, DBProvider } from '../context'
import '../styles/globals.css'
import '@splidejs/react-splide/css'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <CursorProvider>
      <DBProvider>
        {getLayout(<Component {...pageProps} />)}
      </DBProvider>
    </CursorProvider>
  )
}

export default MyApp
