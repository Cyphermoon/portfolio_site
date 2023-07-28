import type { AppProps } from 'next/app'
import LoaderAnimationContext from '../context/LoaderAnimationContext'
import ThemeProvider from '../context/ThemeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <LoaderAnimationContext>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LoaderAnimationContext>


  )
}

export default MyApp
