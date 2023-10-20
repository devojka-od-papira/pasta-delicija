import React from 'react'
import Plus from '../../assets/icons/add-plus.svg'

import styles from './Carousel.module.scss'

const Carousel = () => {
	const products = [
		'spagettini',
		'penne rigate',
		'rochetti',
		'ballerine',
		'elicoidali',
		'conchigline',
	]
	return (
		<div className={styles.carousel}>
			{products.map((item) => (
				<div className={styles.chld}>
					<div>
						<img src={Plus} alt="plus" />
					</div>
					<div>
						<h2>{item}</h2>
					</div>
				</div>
			))}
		</div>
	)
}

export default Carousel
