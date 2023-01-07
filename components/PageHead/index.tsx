import Head from "next/head"
import { headType } from "../../types"


const PageHead = ({ title }: headType) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Kelvin's portfolio" />
      <meta name="keyword" content="cypher moon, Kelvin's portfolio, cypher-moon portfolio " />
      <meta name="author" content="Kelvin (cypher moon)" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default PageHead