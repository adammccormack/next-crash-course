import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const ArticleList = ({ articles }: any) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article: any) => (
                <ArticleItem key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticleList
