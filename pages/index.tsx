import type { NextPage } from 'next'
import Container from '../components/Container'
import Header from '../components/Header'
import PageHead from '../components/PageHead'

const Home: NextPage = () => {
  return (
    <div className=' bg-slate-100 text-gray-800'>
      <PageHead title='Portfolio' />
      <Container>
        <Header />
      </Container>
    </div>
  )
}

export default Home
