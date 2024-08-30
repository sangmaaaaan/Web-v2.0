"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from '@/app/components/layout/Sidebar';
import SelectRoundButton from '@/app/components/button/SelectRoundButton';
import CTANewSection from '@/app/components/button/CTANewSection';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import NextStepButton from '@/app/components/button/NextStepButton';
import NextStepProps from '@/app/components/button/NextStepProps';
const QuestionSelect = () => {
    const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);
    const [selectedQuestions, setSelectedQuestions] = useState([
        { text: "HDFS가 데이터 손실을 방지하기 위해 유지하는 것은 고가용성이다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: HDFS는 데이터 손실을 방지하기 위해 고가용성을 유지합니다." },
        { text: "액티브-액티브 모드는 최소 3개의 노드를 필요로 한다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: 액티브-액티브 모드는 최소 3개의 노드를 필요로 합니다." },
        { text: "스파크는 하둡의 맵리듀스와 경쟁하지 않는다.", answer: "X", type: "OX", isChecked: false, explanation: "해설: 스파크는 하둡의 맵리듀스와 경쟁합니다." },
        { text: "스파크는 스칼라로 작성되었다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: 스파크는 스칼라로 작성되었습니다." },
        { text: "HDFS의 고가용성 문제를 해결하기 위해 하둡 2에서 도입된 기술은 YARN과 주키퍼이다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: HDFS의 고가용성 문제를 해결하기 위해 하둡 2에서 YARN과 주키퍼가 도입되었습니다." },
        { text: "하둡 3에서 지원하는 운영 모드는 액티브-액티브이다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: 하둡 3에서는 액티브-액티브 모드를 지원합니다." },
        { text: "HDFS는 RAID-5 개념을 도입하여 저장 공간 문제를 해결한다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: HDFS는 RAID-5 개념을 도입하여 저장 공간 문제를 해결합니다." },
        { text: "스파크는 __ 환경에서 동작한다.", answer: "jvm", type: "단답형", isChecked: false, explanation: "해설: 스파크는 JVM 환경에서 동작합니다." },
        { text: "스파크 SQL이 쿼리 성능을 최적화하기 위해 사용하는 것은 Catalyst 옵티마이저이다.", answer: "O", type: "OX", isChecked: false, explanation: "해설: 스파크 SQL은 Catalyst 옵티마이저를 사용하여 쿼리 성능을 최적화합니다." },
        { text: "스파크 스트리밍과 통합되어 실시간 데이터 처리를 지원하는 것은 스파크 SQL이다.", answer: "X", type: "OX", isChecked: false, explanation: "해설: 스파크 스트리밍은 실시간 데이터 처리를 지원합니다." },
    ]);
    const router = useRouter();

    useEffect(() => {
        const storedSections = localStorage.getItem('sections');
        if (storedSections) {
            setSections(JSON.parse(storedSections));
        }
    }, []);

    const handleQuestionTypeSelect = (type: string) => {
        console.log(`Selected question type: ${type}`);
    };

    const handleConfirm = () => {
        router.push('/questionResult');
    };

    const handleCheckboxChange = (index: number) => {
      const newQuestions = [...selectedQuestions];
      newQuestions[index].isChecked = !newQuestions[index].isChecked;
      setSelectedQuestions(newQuestions);
    };

    return (
        <div className="flex flex-row bg-bgDeepGray h-screen">
            <Sidebar sections={sections} />
            <div className="w-full flex flex-col overflow-hidden">
                <div className="p-8 mb-4">
                    <h2 className="text-white text-2xl">생성된 문제 확인</h2>
                </div>
                <div className="flex-grow overflow-y-auto">
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-[#3C3C3C] text-white">
                            <thead>
                                <tr>
                                    <th className="p-4">선택</th>
                                    <th className="p-4">문제</th>
                                    <th className="p-4">답</th>
                                    <th className="p-4">문제 유형</th>
                                    <th className="p-4">수정</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedQuestions.map((question, index) => (
                                    <tr key={index}>
                                        <td className="py-4 flex justify-center items-center">
                                            <label className="cursor-pointer" onClick={() => handleCheckboxChange(index)}>
                                                {question.isChecked ? (
                                                    <img src="/check_circle_filled.svg" alt="Checked" width={30} height={30} />
                                                ) : (
                                                    <img src="/check_circle_outline.svg" alt="Unchecked" width={30} height={30} />
                                                )}
                                            </label>
                                        </td>
                                        <td className="py-2 justify-center items-center">{question.text}</td>
                                        <td className="py-2 text-center">
                                            {question.answer}
                                        </td>
                                        <td className="py-2 place-items-center text-center">
                                            <div className="flex justify-center items-center place-items-center">
                                                <SelectRoundButton label={question.type} onClick={() => handleQuestionTypeSelect(question.type)} />
                                            </div>
                                        </td>
                                        <td className="py-2 justify-center flex items-center">
                                            <Image src="/fix.svg" alt="Edit" width={30} height={30} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 p-4">
                    <NextStepProps label="문제 선택" onClick={handleConfirm} />
                </div>
            </div>
        </div>
    );
};

export default QuestionSelect;