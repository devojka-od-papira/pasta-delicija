import React from 'react'
import close from '../../assets/icons/close.svg'

import styles from './Card.module.scss'

const Card = () => {
	return (
		<div className={styles.card}>
			<div className={styles.titleWrapper}>
				<h2>KORPA:</h2>
				<img className={styles.titleImg} src={close} alt="close" />
			</div>
			<div className={styles.divider} />
			<div>
				<div className={styles.productTitleWrapper}>
					<h2>Ballerine</h2>
					<img className={styles.productImg} src={close} alt="close" />
				</div>
				<div className={styles.productDescription}>
					<div>
						<p>Red</p>
						<p>1 kg</p>
					</div>
					<div>
						<p>8900.00 RSD</p>
					</div>
				</div>
			</div>
			<div className={styles.divider} />
			<div className={styles.productCount}>
				<h2>Ukupno:</h2>
				<div>
					<p>8900.00 RSD</p>
				</div>
			</div>
		</div>
	)
}

export default Card
