import React from 'react'
import Person from '../../assets/images/img.jpeg'

import styles from './Avatar.module.scss'

const Avatar = () => {
	return (
		<div className={styles.avatar}>
			<img className={styles.img} src={Person} alt="" />
		</div>
	)
}

export default Avatar
