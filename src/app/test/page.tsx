"use client";

import React from 'react'
import SelectRoundButton from '../components/button/SelectRoundButton'

const testPage = () => {
  return (
    <div>
        <SelectRoundButton label="AI 추천 " onClick={() => console.log('AI 추천')} />
        <SelectRoundButton label="직접 입력" onClick={() => console.log('AI 추천')} />
        <SelectRoundButton label="단답형" onClick={() => console.log('단답형')} />
        <SelectRoundButton label="OX 퀴즈" onClick={() => console.log('OX 퀴즈')} />
        <SelectRoundButton label="빈칸 채워넣기" onClick={() => console.log('빈칸 채워넣기')} />
        <SelectRoundButton label="순서 연결문제" onClick={() => console.log('순서 연결문제')} />
        <SelectRoundButton label="전체 선택" onClick={() => console.log('전체 선택')} />
    </div>
  )
}

export default testPage