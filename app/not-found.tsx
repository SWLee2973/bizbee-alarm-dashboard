import { Logo } from '@/components/svgIcons'
import React from 'react'

export default function NotFound() {
  return (
    <main className="h-full flex items-center justify-center">
      <h2 className="sr-only">404 NotFound</h2>
      <div className='flex flex-col items-center space-y-4'>
        <figure className="flex items-center space-x-6">
          <Logo className='size-20' />
          <figcaption>
            <strong className="text-3xl">404 ERROR</strong>
          </figcaption>
        </figure>
        <p className="text-xl">페이지를 찾을 수 없습니다.</p>
      </div>
    </main>
  )
}
