"use client"
import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import CourseInfo from '@/app/components/course/CourseInfo';
import { useRouter } from 'next/navigation';
import { dummyQuestion, dummyMyAnswer, dummyAiTutor} from '@/app/constants/dummyData';
import ProgressBar from '@/app/components/ProgressBar';
import NextStepButton from '@/app/components/button/NextStepButton';
import AITutorModal from '@/app/components/modal/AITutorModal';

const ResultPage = () => {
  const router = useRouter();
  const dummyMyAnswer1 = dummyMyAnswer;
  const dummyQuestion1 = dummyQuestion;
  const dummyAiTutor1 = dummyAiTutor;
  const [visibleModalIndex, setVisibleModalIndex] = useState<number | null>(null);
  const handleCheckProgress = () => {
    router.push('/question');
  };
  const textScrollRef = useRef<HTMLDivElement>(null);
  const summaryScrollRef = useRef<HTMLDivElement>(null);

  const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);

  useEffect(() => {
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);
  
  const handleMouseEnter = (index: number) => {
    setVisibleModalIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleModalIndex(null);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (textScrollRef.current && summaryScrollRef.current) {
      textScrollRef.current.scrollTop = e.currentTarget.scrollTop;
      summaryScrollRef.current.scrollTop = e.currentTarget.scrollTop;
    }
  };
  return (
    <div className="flex flex-row bg-bgGray ">
    <Sidebar sections={sections} />
    <div className="w-full flex flex-col">
        <CourseInfo number = {4}/>
        <div className="flex flex-row justify-between pt-1">
        <div className="w-full flex flex-col overflow-y-scroll h-[calc(100vh-170px)]" onScroll={handleScroll}>
              {/* dummyQuestion을 map을 통해 반복문을 돌리고 각각의 답변을 내가 쓴 답변과 수정해야 할 답변들을 나눠서 보여줌 */}
              {dummyQuestion1.map((item, index) => (
              <div key={index} className="w-full flex flex-row">
                  {/* 질문과 내가 쓴 답변 */}
                  <div className="w-1/2 border-r-2 border-bgDeepGray ">
                    <div className="p-4 bg-[#3C3C3C]">
                      <div className="flex flex-row gap-2 px-2 mb-4">
                        <div className="flex-shrink-0 w-6 h-6 mb-4 bg-mainGreen text-white font-Pretendard text-[12px] rounded-full flex items-center justify-center">
                          {dummyQuestion1[index].id}  
                        </div>
                        <div className="text-mainWhite font-Pretendard text-[14px]">
                          {dummyQuestion1[index].text}
                        </div>  
                      </div>
                      <p
                      className="mt-[-10px] ml-[10px] font-Pretendard font-normal text-[12px] text-mainWhite/[0.7] cursor-pointer hover:text-mainWhite/[0.4] relative"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      AI Tutor 답변보기
                      {visibleModalIndex === index && <AITutorModal text={dummyAiTutor1[index].text} />}
                    </p>
                    </div>
                    <div className="p-4 bg-[#2C2C2C]">
                      <div className="flex flex-col px-2 font-Pretendard text-[14px] items-start text-white">
                        <div className="w-6 h-6 mb-4 bg-mainWhite text-mainBlack font-Pretendard text-[10px] rounded-full flex items-center justify-center mr-2">
                          상민
                        </div>
                        <p>{dummyMyAnswer1[index].text}</p>
                      </div>
                    </div>
                  </div>
                  {/* 빈칸과 수정 가능한 답변 */}
                  <div className="w-1/2 ">
                    {/* 빈칸으로 남기고싶어 */}
                    <div className="p-4 bg-[#3C3C3C]">
                    <div className="flex flex-col gap-2 px-2 mb-4">
                        <div className="text-mainWhite font-Pretendard text-[14px] py-2 mb-3">
                          Tutor 답변을 통해 자신의 답변을 수정해보세요!
                        </div>  
                    </div>
                    </div>
                    <div className="p-4 bg-[#2C2C2C] ">
                      <div className="flex flex-col px-2 font-Pretendard text-[14px] items-start text-white">
                        <div className="w-6 h-6 mb-4 bg-mainWhite text-[10px] font-Pretendard text-mainBlack rounded-full flex items-center justify-center mr-2 ">
                          상민
                        </div>
                        <form className="w-full px-2 flex flex-col gap-2 ">
                          <textarea
                            className="w-full bg-[#2C2C2C] text-mainWhite outline-none resize-none "
                            placeholder="Tutor 답변을 통해 자신의 답변을 수정해보세요!"
                          />
                      </form>
                      </div>
                    </div>
                  </div>
              </div>
          ))}
        </div>
        </div>
        <ProgressBar progress={100} />
        <NextStepButton onClick={handleCheckProgress} />
    </div>
    </div>
  );
};

export default ResultPage;