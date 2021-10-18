import React, { useState } from 'react'
import styles from './EmployeeCard.module.scss'

const EmployeeCard = (props) => {
	//object destructuring:
	const { name, role } = props.person
	const [count, setCount] = useState(1)

	return (
		<div className={styles.employeeCard}>
			<section className={`${styles.employeeCard} ${styles.counter}`}>
				<h3>
					<span>Name</span>: {name}
				</h3>
				<h3>
					<span>Role</span>: {role}
				</h3>
			</section>
			<div className={`${styles.employeeCard} ${styles.counter}`}>
				<h3>Count</h3>

				<div className={styles.recordProfile}>{count}</div>
				<div
					className={styles.counterProfile}
					onClick={() => count > 0 ?setCount(count - 1): ""}
				>
					-
				</div>
				<div
					className={styles.counterProfile}
					onClick={() => setCount(count + 1)}
				>
					+
				</div>
			</div>
		</div>
	)
}

export default EmployeeCard
