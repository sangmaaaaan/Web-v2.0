"use client";
import Image from 'next/image';

const NextQuestionButton = () => {
  return (
    <button type="submit" className="flex flex-row items-center gap-3 px-4 py-[10px] flex-shrink-0 bg-[#3F3F3F] border-2 border-[#565656] rounded-[30px] hover:bg-[#282828] text-mainWhite hover:text-[#878787] cursor-pointer">
      <p className="font-Pretendard text-[18px] text-mainWhite">다음 문제 보기</p>
      <Image src="/arrow_next.svg" alt="next" width={13} height={20} />
    </button>
  );
};

export default NextQuestionButton;

