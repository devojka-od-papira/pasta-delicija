import React from 'react'

import styles from './Input.module.scss'

const Input = ({ placeholder, type }) => {
	return (
		<input
			className={styles.input}
			type={type}
			id={type}
			name={type}
			placeholder={placeholder}
			required
		/>
	)
}

export default Input
