/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react'
import Checkbox from '../checkbox'
import Input from '../input'
import Button from '../button/index'

import styles from './CheckoutPaymant.module.scss'

const CheckoutPayment = () => {
	const [contact, setContact] = useState(0)
	const [shipping, setShipping] = useState(1)
	const [payment, setPayment] = useState(2)
	return (
		<form>
			<fieldset className={styles.fieldset}>
				<legend>Provera</legend>
				<h3 onClick={() => setContact(1)}>1.Kontakt informacije</h3>
				{contact !== 0 && (
					<div className={styles.contactWrapper}>
						<Input placeholder="Email" />
						<Checkbox text="Email me with news and effers" />
					</div>
				)}
				<div className={styles.divider} />
				<h3 onClick={() => setShipping(2)}>2.Slanje</h3>
				{shipping !== 1 && (
					<div className={styles.shippingWrapper}>
						<div className={styles.customerWrapper}>
							<Input placeholder="Ime" />
							<Input placeholder="Prezime" />
						</div>
						<Input placeholder="Adresa" />
						<Input placeholder="Stan" />
						<div className={styles.placeWrapper}>
							<Input placeholder="Postanski broj" />
							<Input placeholder="Grad" />
						</div>
						<Input placeholder="Telefon" />
						<Checkbox text="Zapamti informacije za naredni put" />
					</div>
				)}
				<div className={styles.divider} />
				<h3 onClick={() => setPayment(3)}>3.Placanje</h3>
				{payment !== 2 && (
					<div>
						<div className={styles.paymentWrapper}>
							<h4>Plaćanje se vrši kuriru prilikom primopredaje paketa.</h4>
						</div>
						<Button text="Zavrsite porudzbinu" variant="filled" />
					</div>
				)}
			</fieldset>
		</form>
	)
}

export default CheckoutPayment
