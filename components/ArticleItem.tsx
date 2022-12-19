import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import PropTypes from 'prop-types'


const ArticleItem = ({article}: any) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
        <div className={articleStyles.card}>
            <h3>{article.title} </h3>
            <p>{article.body}</p>
        </div>
    </Link> 
  )
}

export default ArticleItem
