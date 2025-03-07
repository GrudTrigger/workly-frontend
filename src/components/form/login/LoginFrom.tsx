'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RegisterFormInputs } from '@/types/FormsTypes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function LoginFrom() {
	const router = useRouter()

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit: SubmitHandler<RegisterFormInputs> = data => console.log(data)

	return (
		<div className='w-[560px] h-[786px] bg-[#171817] rounded-[20px] border border-white/5 pt-4 pb-[228px] pl-4'>
			<button onClick={router.back} className=' cursor-pointer'>
				<svg
					width='44'
					height='44'
					viewBox='0 0 44 44'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M32.9999 11.0001L11 33M10.9999 11L32.9998 32.9999'
						stroke='white'
						strokeWidth='1.5'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>
				</svg>
			</button>
			<div className='w-[319px] mt-[70px] py-[80px] mx-auto'>
				<div className='mx-auto w-[61px]'>
					<svg
						width='63'
						height='19'
						viewBox='0 0 63 19'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M56.199 10.6386L52.765 0.259277H55.7859L57.7223 6.89479H57.7739L59.7104 0.259277H62.473L59.0391 10.6386V18.3327H56.199V10.6386Z'
							fill='white'
						/>
						<path
							d='M46.9856 0.259277H49.8257V15.7508H54.499V18.3327H46.9856V0.259277Z'
							fill='white'
						/>
						<path
							d='M36.2948 0.259277H39.1349V7.87592L42.7496 0.259277H45.5897L42.2074 6.89479L45.6413 18.3327H42.6721L40.2709 10.2771L39.1349 12.575V18.3327H36.2948V0.259277Z'
							fill='white'
						/>
						<path
							d='M25.8815 0.259277H30.09C31.5531 0.259277 32.6203 0.603533 33.2916 1.29204C33.9629 1.96334 34.2985 3.00471 34.2985 4.41616V5.52638C34.2985 7.40257 33.6788 8.59025 32.4395 9.08942V9.14106C33.128 9.34761 33.61 9.76932 33.8854 10.4062C34.178 11.0431 34.3243 11.8951 34.3243 12.9623V16.138C34.3243 16.6544 34.3415 17.0761 34.376 17.4032C34.4104 17.713 34.4964 18.0228 34.6341 18.3327H31.7424C31.6391 18.04 31.5703 17.7646 31.5359 17.5065C31.5014 17.2483 31.4842 16.7835 31.4842 16.1122V12.8074C31.4842 11.9812 31.3465 11.4045 31.0711 11.0775C30.8129 10.7504 30.3568 10.5869 29.7027 10.5869H28.7216V18.3327H25.8815V0.259277ZM29.7543 8.00501C30.3224 8.00501 30.7441 7.85871 31.0195 7.56609C31.3121 7.27347 31.4584 6.78291 31.4584 6.0944V4.70017C31.4584 4.04608 31.3379 3.57273 31.0969 3.28012C30.8732 2.9875 30.5117 2.84119 30.0125 2.84119H28.7216V8.00501H29.7543Z'
							fill='white'
						/>
						<path
							d='M19.6485 18.5898C18.2542 18.5898 17.187 18.1939 16.4469 17.4021C15.7067 16.6103 15.3367 15.4915 15.3367 14.0456V4.54416C15.3367 3.09829 15.7067 1.97947 16.4469 1.18768C17.187 0.395893 18.2542 0 19.6485 0C21.0427 0 22.1099 0.395893 22.85 1.18768C23.5902 1.97947 23.9603 3.09829 23.9603 4.54416V14.0456C23.9603 15.4915 23.5902 16.6103 22.85 17.4021C22.1099 18.1939 21.0427 18.5898 19.6485 18.5898ZM19.6485 16.0079C20.6296 16.0079 21.1202 15.414 21.1202 14.2263V4.36343C21.1202 3.17575 20.6296 2.58191 19.6485 2.58191C18.6673 2.58191 18.1768 3.17575 18.1768 4.36343V14.2263C18.1768 15.414 18.6673 16.0079 19.6485 16.0079Z'
							fill='white'
						/>
						<path
							d='M0.5 0.259277H3.23683L4.50196 14.15H4.5536L5.8962 0.259277H8.99449L10.3371 14.15H10.3887L11.6539 0.259277H14.1067L12.2735 18.3327H8.7363L7.44534 6.14604H7.3937L6.10275 18.3327H2.33316L0.5 0.259277Z'
							fill='white'
						/>
					</svg>
				</div>
				<h2 className='text-center text-white text-[45px] font-semibold'>
					Регистрация
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='mt-10 flex flex-col items-center'
				>
					<div className='flex flex-col gap-3'>
						<Input
							className='w-[300px] h-[51px] p-4 text-white rounded-[20px] border-[1px] border-[rgba(255,255,255,0.10)]'
							placeholder='Имя'
							{...register('name', { required: true })}
						/>
						<Input
							className='w-[300px] h-[51px] p-4 text-white rounded-[20px] border-[1px] border-[rgba(255,255,255,0.10)]'
							placeholder='Почта'
							type='email'
							{...register('email', { required: true })}
						/>
						<Input
							className='w-[300px] h-[51px] p-4 text-white rounded-[20px] border-[1px] border-[rgba(255,255,255,0.10)]'
							placeholder='Пароль'
							type='password'
							{...register('password', { required: true })}
						/>
					</div>
					<div className='mt-8 mx-auto'>
						<Button className='w-[300px] px-3 py-7 bg-white rounded-[100px] text-[#010101] cursor-pointer hover:bg-[#6DFFA6] transition-all'>
							Зарегистрироваться
						</Button>
						<div className='mt-[17.5px] flex justify-center items-center gap-1'>
							<span className='text-[#636363] text-[12px] font-medium'>
								Уже есть аккаунт?
							</span>
							<Link
								href='/login'
								className='text-[#A9A9A9] text-[14px] font-medium hover:text-[#6DFFA6]'
							>
								Войти
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
