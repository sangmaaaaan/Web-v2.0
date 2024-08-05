"use client"
import React from 'react';
import Image from 'next/image';

interface NextStepButtonProps {
  onClick: () => void;
}

const NextStepButton: React.FC<NextStepButtonProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-end items-center px-8 pt-4 pb-5 bg-bgGray">
      <button className="flex flex-row items-center gap-4 cursor-pointer" onClick={onClick}>
        <p className="font-Pretendard text-[18px] text-mainWhite">학습 점검하기</p>
        <Image src="/arrow_next.svg" alt="next" width={13} height={20} />
      </button>
    </div>
  );
};

export default NextStepButton;