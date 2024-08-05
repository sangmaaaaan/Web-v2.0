"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import CreateNewFile from '../button/CTANewFile'
import Link from 'next/link'
import NoteModify from '../modal/NoteModify'
const SectionInfo = () => {

const [showModifying, setShowModifying] = useState(false);
    const handleMenuClick = () => {
        setShowModifying(!showModifying);
        console.log('clicked')


    }
return (
    <div className = "flex flex-row justify-between px-8 py-6">
        <div className = "flex flex-col">
            <p className = "font-Pretendard text-[20px] text-mainWhite">
                빅데이터기술특론
            </p>
            <div>
                <p className = "font-Pretendard text-[14px] text-mainWhite/[0.4]">
                    하석재
                </p>
            </div>
        </div>
        <div className = "flex flex-row gap-3">
             <Link href="/createNotes">
              <CreateNewFile />
            </Link>
            <Image 
            src = "kebab-menu.svg" 
            alt = "logo"
            width = {24}
            height = {24}
            onClick= {handleMenuClick}
            className=' invert cursor-pointer' 
            />
            {showModifying && (
            <div className="absolute right-[42px] top-[85px] mt-[-18px] bg-bgDeepGray rounded-[8px] shadow-2xl">
                <NoteModify />
            </div>
        )}
        </div>
    </div>
  )
}

export default SectionInfo