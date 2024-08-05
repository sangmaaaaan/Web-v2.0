"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CreateNewFile from '../button/CTANewFile'
import Link from 'next/link'
import NoteModify from '../modal/NoteModify'
import StateNumber from '../StateNumber'

interface CourseInfoProps {
  number: number;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ number }) => {
  const [showModifying, setShowModifying] = useState(false);

  const handleMenuClick = () => {
    setShowModifying(!showModifying);
    console.log('clicked')
  }

  return (
    <div className="flex flex-row justify-between px-8 py-6">
      <div className="flex flex-col">
        <p className="font-Pretendard text-[20px] text-mainWhite">
          빅데이터기술특론_6주차
        </p>
        <div className="flex flex-row space-x-8">
          <p className="font-Pretendard text-[14px] text-mainWhite/[0.4]">
            빅데이터기술특론
          </p>
          <p className="font-Pretendard text-[14px] text-mainWhite/[0.4]">
            하석재
          </p>
          <p className="font-Pretendard text-[14px] text-mainWhite/[0.4]">
            121분
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <StateNumber number={number} />
        <div className="flex flex-row gap-3">
          <Image 
            src="kebab-menu.svg" 
            alt="logo"
            width={24}
            height={24}
            onClick={handleMenuClick}
            className='invert cursor-pointer' 
          />
          {showModifying && (
            <div className="absolute right-[42px] top-[85px] mt-[-18px] bg-bgDeepGray rounded-[8px] shadow-2xl">
              <NoteModify />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseInfo