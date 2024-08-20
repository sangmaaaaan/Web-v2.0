"use client";

import Sidebar from '@/app/components/layout/Sidebar';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CTANewSection from '@/app/components/button/CTANewSection';
import { dummyExplanation, dummyMyAnswer, dummyQuestion } from '@/app/constants/dummyData';
import NextStepProps from '@/app/components/button/NextStepProps';

const QuestionResult = () => {
  const router = useRouter();
  const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);

  const handleSubmit = () => {
    console.log({ date, time, duration });
    // 라우팅
    router.push('/questionSelect'); // 다음 페이지로 라우팅
  };

  return (
    <div className="flex flex-row bg-bgDeepGray h-screen">
      <Sidebar sections={sections} />
      <div className="w-full flex flex-col overflow-hidden">
        <div className="p-8 mb-4">
          <h2 className="text-white text-2xl">문제 풀이 기간 및 제한 시간 설정</h2>
          <div className="flex-grow overflow-y-auto">
            <div className="pt-4 flex flex-row text-center items-center space-x-4">
              <label className="text-white">문제 풀이 기간:</label>
              <div className="flex space-x-4">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="p-2 rounded-full bg-[#252424] text-white px-3 outline-none"
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="p-2 rounded-full bg-[#252424] text-white px-3 outline-none"
                />
              </div>
              <p className="text-white">까지</p>
            </div>
            <div className="pt-4 flex flex-row items-center space-x-4 ">
              <label className="text-white">제한 시간:</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-[100px] p-2 rounded-full mt-1 bg-[#252424] text-white px-3 outline-none"
                placeholder="(예: 30분)"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full overflow-y-auto bg-[#3C3C3C] ">
        <div className="w-1/2 p-4">
    <h3 className="text-white text-xl">문제 및 답변</h3>
    {dummyQuestion.map((item, index) => (
      <div key={index} className="hover:bg-bgDeepGray p-4 h-[160px] rounded-md mb-4">
        <p className="text-white">{item.text}</p>
        <p className="text-white mt-8">답변: {dummyMyAnswer[index]?.text}</p>
      </div>
    ))}
  </div>
  <div className="w-1/2 p-4"> 
    <h3 className="text-white text-xl">해설</h3>
    {dummyExplanation.map((item, index) => (
      <div key={index} className="hover:bg-bgDeepGray p-4 h-[160px] rounded-md mb-4">
        <p className="text-white">{item.text}</p>
      </div>
    ))}
  </div>
</div>

        <div className="absolute bottom-0 right-0 p-4">
          <NextStepProps label=
        "문제선택" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default QuestionResult;