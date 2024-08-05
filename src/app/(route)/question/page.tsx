"use client"

import Sidebar from '@/app/components/layout/Sidebar';
import CourseInfo from '@/app/components/course/CourseInfo';
import ProgressBar from '@/app/components/ProgressBar';
import NextQuestionButton from '@/app/components/button/NextQuestionButton';
import NextStepButton from '@/app/components/button/NextStepButton';
import { dummyQuestion, dummyAnswer } from '@/app/constants/dummyData';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const QuestionPage = () => {
  const router = useRouter();
  const handleCheckProgress = () => {
    router.push('/result');
  };
  const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(dummyAnswer);
  const [error, setError] = useState('');

  const handleNextQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (answers[currentQuestion].length < 20 || answers[currentQuestion].length > 500) {
      setError('답변은 20자 이상 500자 이하로 작성해주세요.');
      return;
    }
    setError('');
    if (currentQuestion < dummyQuestion.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = e.target.value;
    if (newAnswers[currentQuestion].length > 500) {
      setError('최대 글자수는 500자예요!');
    } else {
      setError('');
    }
    setAnswers(newAnswers);
  };

  useEffect(() => {
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);
  
  return (
    <div className="flex flex-row bg-bgGray min-h-screen">
      <Sidebar sections = {sections}/>
      <div className="w-full flex flex-col">
        <CourseInfo number = {1} />
        <div className="flex flex-col justify-between pt-1">
          <div className="flex flex-col">
          {dummyQuestion.map((question, index) => (
            <div key={question.id} className={index === currentQuestion ? 'block px-8 ' : 'hidden'}>
              <div className = "flex flex-col ">
                <p className="text-mainWhite/[0.4] text-end justify-end font-Pretendard font-normal items-end text-[20px]">문제 {index + 1} / {dummyQuestion.length}</p>
                <div className="flex flex-col">
                    <p className="text-mainWhite text-center text-[22px]">학습 점검하기</p>
                    <p className="text-mainWhite/[0.4] text-center text-[16px]">자신의 생각을 입력해보세요. 틀려도 좋습니다.</p>
                </div>
              </div>
                  <div className="flex justify-center items-center mt-16">
                    <div className="w-8 h-8 bg-[#616161] text-white font-Pretendard text-[20px] rounded-full flex items-center justify-center mr-2">
                      {question.id}
                    </div>
                  </div>
                  <p className="text-mainWhite text-[22px] mt-2 text-center">{question.text}</p>
                </div>
              ))}
            </div>
                  <form onSubmit={handleNextQuestion} className="w-full h-[350px] px-8">
                    <textarea
                      className={`w-full mt-4 p-4 bg-bgDeepGray text-mainWhite border-[1px] ${error ? 'border-red-500' : 'border-[#5B5B5B]'} rounded-[20px] resize-none outline-none`}
                      value={answers[currentQuestion]}
                      style={{ height: '320px' }}
                      onChange={handleAnswerChange}
                      placeholder="자신의 생각을 입력해보세요."
                    />
                    {error && <p className="text-red-500 h-[20px] ">{error}</p>}
                  </form>
          <div className="flex justify-end mt-4 py-4 px-8 pb-8 ">
            <NextQuestionButton />
          </div>
        </div>
        <ProgressBar progress={66} />
        <NextStepButton onClick={handleCheckProgress} />
    </div>
    </div>
  );
};

export default QuestionPage;