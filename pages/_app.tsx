import type { AppProps } from 'next/app'
import LoaderAnimationContext from '../context/LoaderAnimationContext'
import ThemeProvider from '../context/ThemeProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <LoaderAnimationContext>
        <Component {...pageProps} />
      </LoaderAnimationContext>
    </ThemeProvider>


  )
}


export default MyApp
