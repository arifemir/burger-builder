import React from 'react'
import styles from './Input.module.css'

const Input = (props) => {
	let { label, inputtype } = props
	let  inputElement = null
	switch (inputtype) {
		case 'input':
			inputElement = <input className={styles.InputElement} {...props} />
			break
		case 'textarea':
			inputElement = <textarea {...props} />
      break
		default:
			inputElement = <input className={styles.InputElement} {...props} />
			break
	}
	return (
		<div className={styles.Input} >
			<label className={styles.Label}>{label}</label>
			{inputElement}
		</div>
	)
}

export default Input
