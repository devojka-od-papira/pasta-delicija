import React from 'react'

import styles from './Textarea.modules.scss'

const Textarea = ({ placeholder, name, value }) => {
	return (
		<textarea
			className={styles.txtarea}
			id={name}
			name={name}
			value={value}
			placeholder={placeholder}
			rows="15"
			cols="40"
		/>
	)
}

export default Textarea
