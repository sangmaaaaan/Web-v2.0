"use client";

import Lottie from "react-lottie-player";
import lottieJson from "../../public/BouncingBall.json";
import Image from "next/image";
import Link from "next/link";
import GoogleLoginCTA from "./components/GoogleLoginCTA";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const Home = () => {
  
  const [isClient, setIsClient] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/main");
    }
  }, [status]);

  return (

    <main className="w-full h-screen bg-bgGray flex flex-row">
      <section className="text-mainWhite w-full">
        <div className="fixed py-8 px-8">
          <Link href="/home">
            <Image src="/icon.svg" alt="logo" width={100} height={100} />
          </Link>
        </div>
        <div className="h-full flex flex-col justify-center px-8 items-start">
          <div className="flex flex-col relative justify-start items-start">
            {isClient && (
              <div className="h-[70px] w-[70px] z-10 ml-[-20px]">
                <Lottie loop animationData={lottieJson} play />
              </div>
            )}
            <section className="overflow-hidden">
              <div className="animate-[textAnimation_8s_infinite]">
                <p className="font-Pretendard font-normal text-[28px] block">
                  AI Tutor와 함께 학습 효과를 높여보세요!
                </p>
                <p className="font-Pretendard font-normal text-[28px] block">
                  1단계 : 강의원문과 요약노트를 비교하며 학습해보세요
                </p>
                <p className="font-Pretendard font-normal text-[28px] block">
                  2단계 : 서술형 문제를 풀이하며 학습 이해도를 점검해보세요
                </p>
                <p className="font-Pretendard font-normal text-[28px] block">
                  3단계 : AI Tutor에게 질문을 통해 모르는 부분을 보완해보세요
                </p>
                <p className="font-Pretendard font-normal text-[28px] block">
                  이제 AI Tutor와 함께 학습하러 가볼까요?
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center px-[112px] bg-bgDeepGray">
        <div className="text-mainWhite font-Pretendard font-normal text-[24px] px-4 py-4">
          <p>자기주도학습 시작하기</p>
        </div>
        <GoogleLoginCTA />
      </section>
    </main>
  );
};

export default Home;

