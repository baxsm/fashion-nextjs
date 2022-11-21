import Branding from '../components/home/Branding'
import Collection from '../components/home/Collection'
import Feature from '../components/home/Feature'
import Gifts from '../components/home/Gifts'
import News from '../components/home/News'
import Layout from './Layout'

export default function Home() {
  return (
    <>
      <Layout>
          <Collection />
          <Feature />
          <Branding />
          <News />
          <Gifts />
      </Layout>
    </>
  )
}
