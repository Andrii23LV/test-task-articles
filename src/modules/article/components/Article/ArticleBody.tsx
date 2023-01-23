import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLeft from '../../../../icons/ArrowLeft';

import { Article } from '../../../home/models';
import styles from './ArticleBody.module.scss';

type ArticleBodyProps = {
	article: Article;
};

const ArticleBody: React.FC<ArticleBodyProps> = ({ article }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.article}>
				<h2 className={styles.title}>{article.title}</h2>
				<p className={styles.summary}>{article.summary}</p>
			</div>
			<Link to='/' className={styles.link}>
				<ArrowLeft /> Back to homepage
			</Link>
		</div>
	);
};

export default ArticleBody;
