import type { AppProps } from 'next/app'
import LoaderAnimationContext from '../context/LoaderAnimationContext'
import { NavProvider } from '../context/NavProvider'
import ThemeProvider from '../context/ThemeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <NavProvider>
        <LoaderAnimationContext>
          <Component {...pageProps} />
        </LoaderAnimationContext>
      </NavProvider>
    </ThemeProvider>


  )
}


export default MyApp
