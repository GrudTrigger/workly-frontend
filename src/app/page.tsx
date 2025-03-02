import Link from 'next/link'

export default function Home() {
	return (
		<div className='max-w-[1360px] h-[900px] mx-auto mt-6 bg-[url(/bg.png)] flex items-center justify-center'>
			<div className=''>
				<h2 className='text-white font-semibold text-5xl leading-[63px]'>
					Один клик до работы мечты
				</h2>
				<Link
					className='block w-[151px] h-[43px] bg-white rounded-[100px] py-3 px-7 text-[#010101] text-[13px] mt-4.5 mx-auto font-medium'
					href='/vacations'
				>
					Начать поиск
				</Link>
			</div>
		</div>
	)
}
