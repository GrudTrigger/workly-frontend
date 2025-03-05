import LoginFrom from '@/components/form/login/LoginFrom'
import Image from 'next/image'

export default function LoginModal() {
	return (
		<div className='fixed inset-0 flex items-start justify-center bg-black/50'>
			<div className='shadow-lg w-[1360px] h-[786px] mt-10 flex items-start gap-3'>
				<LoginFrom />
				<div className='bg-black'>
					<Image src='/register.png' alt='register' width={788} height={786} />
				</div>
			</div>
		</div>
	)
}
