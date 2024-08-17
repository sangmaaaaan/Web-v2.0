"use client"
import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import CourseInfo from '@/app/components/course/CourseInfo';
import { useRouter } from 'next/navigation';
import { dummySummary, dummyText } from '@/app/constants/dummyData';
import ProgressBar from '@/app/components/ProgressBar';
import NextStepButton from '@/app/components/button/NextStepButton';

const SummariesPage = () => {
  const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);

  useEffect(() => {
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);
  const router = useRouter();
  const dummyText1 = dummyText;
  const dummySummary1 = dummySummary;
  const handleCheckProgress = () => {
    router.push('/question');
  };
  const textScrollRef = useRef<HTMLDivElement>(null);
  const summaryScrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (textScrollRef.current && summaryScrollRef.current) {
      textScrollRef.current.scrollTop = e.currentTarget.scrollTop;
      summaryScrollRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };
  return (
    <div className="flex flex-row bg-bgGray ">
    <Sidebar sections={sections}/>
    <div className="w-full flex flex-col">
        <CourseInfo number = {0} />
        <div className="flex flex-row justify-between pt-1">
        <div className="w-full flex flex-col overflow-y-scroll h-[calc(100vh-170px)]" onScroll={handleScroll}>
            {dummyText1.map((item, index) => (
              <div key={index} className="w-full  flex flex-row">
                <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'bg-[#3C3C3C]' : 'bg-[#2C2C2C]'}`}>
                  <div className="flex flex-col px-2 font-Pretendard text-[14px] items-start text-white">
                    <div className="w-6 h-6 mb-4 bg-[#616161] text-white font-Pretendard text-[12px] rounded-full flex items-center justify-center mr-2">
                      {item.id}
                    </div>
                    {item.text}
                  </div>
                </div>
                <div className={`w-1/2 p-4 ${index % 2 === 0 ? 'bg-[#3C3C3C]' : 'bg-[#2C2C2C]'}`}>
                  <div className="flex flex-col   px-2 font-Pretendard text-[14px] items-start text-white">
                    <div className="w-6 h-6 mb-4 bg-[#05D686] text-[12px] font-Pretendard text-white rounded-full flex items-center justify-center mr-2">
                      {dummySummary1[index].id}
                    </div>
                    {dummySummary1[index].text}
                  </div>
                </div>
              </div>
            ))}
        </div>
        </div>
        <ProgressBar progress={33} />
        <NextStepButton onClick={handleCheckProgress} />
    </div>
    </div>
  );
};

export default SummariesPage;