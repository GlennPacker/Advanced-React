import React, { Component } from 'react';
import DataApi from './DataApi';
import ArticleList from './components/ArticleList'
import { data } from './testData'

const api = new DataApi(data);

class App extends Component {
	constructor() {
		super();
		this.state = {
			articles: api.getArticles(),
			authors: api.getAuthors()
		}
		console.log(this.state)
	}

	render() {
		return (
			<>
				<h2>Test</h2>
				<ArticleList
					articles={this.state.articles}
					authors={this.state.authors}
				/>
				{/* articles: {this.state.articles}
				authors: {this.state.authors} */}
			</>
		);
	}
}

export default App;
