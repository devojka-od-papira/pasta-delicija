import React from 'react'

import styles from './SocialMedia.module.scss'

const SocialMedia = ({ socialURL, socialAlt }) => {
	return (
		<div className={styles.border}>
			<div className={styles.wrapper}>
				<img className={styles.img} src={socialURL} alt={socialAlt} />
			</div>
		</div>
	)
}

export default SocialMedia
