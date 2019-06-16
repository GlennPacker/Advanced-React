import React from 'react';
import Article from '../Article';

const ArticleList = ({ articles, authors }) => {
	return (
		<div>
			{(Object.values(articles)).map(article => {
				return (
					<Article article={article} author={authors[article.authorId]} key={article.id} />
				)
			})}
		</div>
	);
}

export default ArticleList;
