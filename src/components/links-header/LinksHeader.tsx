'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LinksHeader = () => {
	const path = usePathname()

	return (
		<div className='w-[274px] h-[51px] flex justify-between items-center py-4 px-6 border-[1px] border-[#FFFFFF0D]  bg-[#171817] rounded-[100px] text-sm'>
			<Link
				href='/'
				className={clsx('text-white', path === '/' && '!text-[#6DFFA6]')}
			>
				Соискателям
			</Link>
			<Link
				href='/company'
				className={clsx('text-white', path === '/company' && '!text-[#6DFFA6]')}
			>
				Работодателям
			</Link>
		</div>
	)
}

export default LinksHeader
