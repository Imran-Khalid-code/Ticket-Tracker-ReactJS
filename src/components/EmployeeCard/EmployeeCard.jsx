import React from 'react'
import styles from './EmployeeCard.module.scss'

const EmployeeCard = (props) => {
	//object destructuring:
	const { name, role } = props.person

	return (
		<div className={styles.employeeCard}>
			<section className={styles.employeeCard}>
				<h3>
					<span>Name</span>: {name}
				</h3>
				<h3>
					<span>Role</span>: {role}
				</h3>
			</section>
			<div className={styles.employeeCard}>
				<h3>Counter</h3>
				<div className={styles.recordProfile}>0</div>
				<div className={styles.counterProfile}>-</div>
				<div className={styles.counterProfile}>+</div>
			</div>
		</div>
	)
}

export default EmployeeCard
