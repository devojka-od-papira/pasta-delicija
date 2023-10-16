import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo'
import shoppingCard from '../../assets/images/shopping-cart.svg'

import styles from './Navbar.module.scss'

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<Logo />
			<Link to="onama">O nama</Link>
			<Link to="pasta">Pasta</Link>
			<Link to="contact">Contact</Link>
			<img className={styles.icon} src={shoppingCard} alt="shoppingCard" />
		</nav>
	)
}
export default Navbar
