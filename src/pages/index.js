import * as React from 'react';
import { Link } from 'gatsby';

export default function Home() {
	return (
		<>
			<h1>Hello Adiros 🤓</h1>
			<div className=''>
				<Link to='/about'>about me 🤓</Link>
			</div>
			<div className=''>
				<Link to='/company/history'>about company history 🤓</Link>
			</div>
			<a href='/about'>reg link</a>
		</>
	);
}
