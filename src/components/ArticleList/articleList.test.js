import React from 'react';
import ArticleList from './index';

import renderer from 'react-test-renderer';

describe('ArticleList Component', () => {

	const testProps = {
		articles: {
			a: { id: 1 },
			b: { id: 2 }
		},
		articleActions: {
			lookupAuthor: jest.fn(() => ({}))
		}
	}

	it('renders connrectly', () => {
		const ele = renderer.create(
			<ArticleList
				{...testProps}
			/>
		)
		expect(ele).toMatchSnapshot();
	})
})