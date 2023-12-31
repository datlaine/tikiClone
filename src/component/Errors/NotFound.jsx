import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useMatch, useNavigate, useNavigation } from 'react-router-dom'

export default function NotFound() {
  const [count, setCount] = useState(5)
  const navigate = useNavigate()

  let xoaInter = useRef(null)
  let xoaTimout = useRef(null)
  useEffect(() => {
    if (count > 0) {
      xoaInter.current = setInterval(() => {
        console.log('1000')
        setCount((prev) => prev - 1)
      }, 1000)
      xoaTimout.current = setTimeout(() => {
        console.log('inter')
        navigate('/')
      }, 5000)
    }
    return () => {
      clearInterval(xoaInter.current)
      clearTimeout(xoaTimout.current)
    }
  }, [])

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <main className='grid min-h-full max-w-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='text-base font-semibold text-indigo-600'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>Không tìm thấy trang</h1>
          <p className='mt-6 text-base leading-7 text-gray-600'>Trang này chưa được xây dựng</p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/Contact'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Gửi hỗ trợ
            </Link>
            <Link to='/' className='text-sm font-semibold text-gray-900'>
              Quay về sau {count}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
