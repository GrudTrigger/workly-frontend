import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/header/Header'
import { Montserrat } from 'next/font/google'
// const involve = localFont({
// 	src: [
// 		{
// 			path: '../../public/Involve-Regular.ttf',
// 			weight: '400',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../../public/Involve-Bold.ttf',
// 			weight: '700',
// 			style: 'normal',
// 		},
// 		{
// 			path: '../../public/Involve-Oblique.ttf',
// 			weight: '400',
// 			style: 'italic',
// 		},
// 	],
// 	variable: '--font-involve',
// })

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} antialiased bg-[#010101] pt-7.5`}
			>
				<Header />
				{children}
			</body>
		</html>
	)
}
