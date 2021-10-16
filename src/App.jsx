import React, { Component } from 'react'
import styles from './App.module.scss'
import team from './data/team'
import EmployeeCard from './components/EmployeeCard'

const App = () => {
	return (
		<>
			<h1 className={styles.heading}>Ticket Tracker</h1>

			<div>
				<EmployeeCard />
			</div>
		</>
	)
}

export default App

//1.Change title in <public />
//2.Rename src/App.js => App.jsx
//3. Clear out code from return in App.jsx
//4.Clear out code form App.css
//5.Add global reset to index.css
//6.install sass
//7.Rename App.css => App.module.scss & change import
