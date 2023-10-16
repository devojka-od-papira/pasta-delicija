import React from 'react'
import Logo from '../logo'

import styles from './Header.module.scss'
import Navbar from '../navbar'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.leftWrapper}>
				<Logo />
			</div>
			<div className={styles.rightWrapper}>
				<Navbar />
			</div>
		</div>
	)
}
export default Header
