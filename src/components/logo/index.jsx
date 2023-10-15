import React from 'react'
import colorLogo from '../../assets/images/color-logo.svg'

import styles from './Logo.module.scss'

function Logo() {
	return <img src={colorLogo} className={styles.logo} alt="logo" />
}
export default Logo
