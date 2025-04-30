"use client";

import { useRouter } from 'next/navigation';
import React from 'react'


interface IResetButtonProps {
  href?: string
}

function ResetButton({ href }: IResetButtonProps) {
  const router = useRouter();

  return (
    <button
      type="reset"
      onClick={() => router.replace(href ?? "")}
      className="btn btn-square bg-secondary text-secondary-content font-semibold w-20"
    >
      초기화
    </button>
  )
}

export default ResetButton