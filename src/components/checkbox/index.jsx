import React from 'react'

import styles from './Checkbox.module.scss'

const Checkbox = ({ text }) => {
	return (
		<div className={styles.container}>
			<label htmlFor={text}>
				{text}
				<input type="radio" id={text} name="radio" value={text} />
			</label>
		</div>
	)
}

export default Checkbox
