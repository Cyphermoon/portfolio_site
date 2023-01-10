import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../context/ThemeProvider'
import { useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  return (
    <>
      {
        loading ?
          <LoadingScreen setLoading={setLoading} /> :
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>}
    </>

  )
}

export default MyApp
