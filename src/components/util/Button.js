import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button(props) {
	const { type, onClick } = props
	return (
		<button
			className={cn(
				styles.Btn,
				type === 'danger' ? styles.Danger : styles.Success
			)}
			onClick={onClick}
		>
			{props.children}
		</button>
	)
}
