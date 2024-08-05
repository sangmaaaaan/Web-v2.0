import React from 'react';

interface AITutorModalProps {
  text: string;
}

const AITutorModal: React.FC<AITutorModalProps> = ({ text }) => {
  return (
    <div className="absolute  top-[20px] p-4 left-0 bg-[#1E1E1E] rounded-2xl shadow-lg ">
      <div className="flex flex-row gap-3">
        <div className="flex-shrink-0 w-6 h-6 mb-4 bg-mainGreen text-mainBlack font-Pretendard text-[9px] rounded-full flex items-center justify-center">
          Tutor
        </div>
        <div className = "font-Pretendard text-[14px] text-mainWhite">
          {text}
        </div>
      </div>
    </div>
  );
};

export default AITutorModal;