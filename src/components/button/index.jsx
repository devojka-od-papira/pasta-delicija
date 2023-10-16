import React from 'react'
import cx from 'classnames'

import styles from './Button.module.scss'

const Button = ({ text, variant }) => {
	console.log('variant', variant)
	return (
		<button
			type="button"
			className={cx(styles.btn, {
				[styles.filled]: variant === 'filled',
				[styles.outline]: variant === 'outline',
			})}
		>
			{text}
		</button>
	)
}

export default Button
