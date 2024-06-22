import type { AppProps } from 'next/app'
import LoaderAnimationContext from '../context/LoaderAnimationContext'
import ThemeProvider from '../context/ThemeProvider'
import '../styles/globals.css'
import { NavProvider } from '../context/NavProvider'

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
