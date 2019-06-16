import React from 'react';

const Article = ({ article, author }) => {
	return (
		<>
			<div>{article.title}</div>
			<div>{article.date}</div>
			<div>{article.body}</div>
			<div><a href={author.website}>{author.firstName} {author.lastName}</a></div>
			<hr />
		</>
	);
}

export default Article;