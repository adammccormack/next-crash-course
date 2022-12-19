import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({ articles }) {

  return (
    <div>
      <Head>
        <title>All The Newz</title>
        <meta name='keyswords' content='news, news articles' />
      </Head>
      <ArticleList articles={articles}/> 
    </div> 
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
