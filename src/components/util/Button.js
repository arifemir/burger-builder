import React from 'react'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button(props) {
	const { type, onClick, sign} = props
	return (
		<button
			className={cn(
				styles.Btn,
				type === 'danger' ? styles.Danger : styles.Success,
        sign && styles.sign
			)}
			onClick={onClick}
		>
			{props.children}
		</button>
	)
}
