import React from 'react';
import styles from './BackgroundImage.module.scss';

type BackgroundImageProps = {
	url: string;
	newsSite: string;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({ url, newsSite }) => {
	return <img src={url} alt={newsSite} className={styles.image} />;
};

export default BackgroundImage;
