import React from 'react';
import Article from '../Article';

const ArticleList = ({ articles, articleActions }) => {
	return (
		<div>
			{(Object.values(articles)).map(article => {
				return (
					<Article
						article={article}
						actions={articleActions}
						key={article.id}
					/>
				)
			})}
		</div>
	);
}

export default ArticleList;
