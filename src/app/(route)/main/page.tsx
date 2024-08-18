"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react';
const Home = () => {
  const router = useRouter();

  const handleProfessorClick = () => {
    console.log('professor 클릭');
    router.push('/professor');
  };
  return (
    <div className="flex flex-row bg-bgDeepGray">
      <div className="w-full h-lvh flex flex-col justify-center items-center">
        <div className="px-8 py-8 font-Pretendard font-semibold leading-[70px] text-[57px] text-custom-green">
          회원님의 신분을 선택해주세요
        </div>
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-primaryGray text-white font-Pretendard text-[18px] hover:bg-custom-green active:bg-custom-green rounded-lg px-16 py-8 space-y-4" onClick={handleProfessorClick}>
            <Image src="professor.svg" alt="logo" width={100} height={100} />
            <p className="font-Pretendard font-normal text-2xl">교수자</p>
          </button>
          <button className="bg-primaryGray text-white font-Pretendard text-[18px] hover:bg-custom-green active:bg-custom-green rounded-lg px-16 py-8 space-y-4">
            <Image src="student.svg" alt="logo" width={100} height={100} />
            <p className="font-Pretendard font-normal text-2xl">학생</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;