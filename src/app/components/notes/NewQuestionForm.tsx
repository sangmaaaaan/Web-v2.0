"use client";

import React from 'react'
import SelectRoundButton from '../button/SelectRoundButton';

const NewQuestionForm = () => {
  return (
    <div className="w-full h-full text-white p-8">
      <div className="pb-8">
        <p className="font-Pretendard font-semibold text-2xl">복습 문제 생성</p>
        <p className="font-Pretendard text-md text-[#A6A6A6]">복습 문제 생성 옵션을 선택해주세요.</p>
      </div>
      <div className="flex flex-row place-items-start pb-8">
        <p className="pr-6 mt-2 place-items-end">문제 개수</p>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row space-x-8 place-items-center">
            <SelectRoundButton label="AI 추천" onClick={() => console.log('AI 추천')} />
            <p>복습에 필요한 최소 문제만 제공해드려요</p> 
          </div>
          <div className="flex flex-row place-items-center">
            <SelectRoundButton label="직접 입력" onClick={() => console.log('직접 입력')} />
            <form className="flex flex-row pl-5">
              <input type="text" className="bg-transparent focus:outline-none w-[24px]  border-b border-[#A6A6A6"/>
              <p className="pl-2">개</p>
            </form>
          <div/>
        </div>
    </div>
    </div>
        <div className="flex flex-row place-items-center">
          <p className="pr-6">문제 유형</p>
          <div className="flex flex-row space-x-4">
            <SelectRoundButton label="OX 퀴즈" onClick={() => console.log('OX 퀴즈')} />
            <SelectRoundButton label="단답형" onClick={() => console.log('단답형')} />
          </div>
        </div>
      </div>
      
  )
}

export default NewQuestionForm