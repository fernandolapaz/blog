import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
	return (
		<div
			style={{
				display: 'grid',
				gap: '1rem',
				backgroundColor: '#212121',
				borderRadius: '0.5rem',
				padding: '2rem',
				fontSize: '1.25rem',
				color: 'white',
			}}
		>
			<span aria-hidden='true'>❔</span>
			<h1>This page doesn't exist.</h1>
			<p>
				Back{' '}
				<Link
					to='/'
					style={{ color: 'skyblue' }}
				>
					Home
				</Link>
			</p>
		</div>
	)
}
