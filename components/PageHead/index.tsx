import Head from "next/head"
import { headType } from "../../types"


const PageHead = ({title} :headType) => {
  return (
        <Head>
        <title>{title}</title>
        <meta name="description" content="Kelvin's portfolio" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default PageHead