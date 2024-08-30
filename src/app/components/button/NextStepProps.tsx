"use client"
import React from 'react';
import Image from 'next/image';

interface NextStepButtonProps {
  onClick: () => void;
  label: string; // label prop 추가
}

const NextStepButton: React.FC<NextStepButtonProps> = ({ onClick, label }) => { // label prop 사용
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-end items-center px-8 pt-4 pb-5 bg-bgGray">
      <button className="flex flex-row items-center gap-4 cursor-pointer" onClick={onClick}>
        <p className="font-Pretendard text-[18px] text-mainWhite">{label}</p> {/* label로 변경 */}
        <Image src="/arrow_next.svg" alt="next" width={13} height={20} />
      </button>
    </div>
  );
};

export default NextStepButton;