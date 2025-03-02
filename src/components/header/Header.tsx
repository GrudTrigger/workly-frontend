import React from 'react'
import LinksHeader from '../links-header/LinksHeader'
import Link from 'next/link'

const Header = () => {
	return (
		<header className='max-w-[1360px] w-full h-[51px] mx-auto flex justify-between items-center'>
			<div className='bg-white rounded-[50%] w-7 h-7'></div>
			<LinksHeader />
			<Link
				href='/register'
				className='flex items-center gap-2 text-white hover:text-[#6DFFA6] stroke-[#6DFFA6]'
			>
				<svg
					width='15'
					height='14'
					viewBox='0 0 15 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle cx='7.5' cy='4.625' r='4' stroke='currentColor' />
					<path
						d='M1 12.875C1 12.875 3.88889 8.875 7.5 8.875C11.1111 8.875 14 12.875 14 12.875'
						stroke='currentColor'
						strokeLinecap='round'
					/>
				</svg>
				<span>Создать аккаунт</span>
			</Link>
		</header>
	)
}

export default Header
