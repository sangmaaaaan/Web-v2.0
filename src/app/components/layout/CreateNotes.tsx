import Sidebar from '@/app/components/layout/Sidebar';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CreateNewFile from '@/app/components/button/CTANewFile';
import SectionInfo from '@/app/components/section/SectionInfo';
import { notes, Note } from '@/app/constants/notes';
import { Section } from '@/app/constants/folders';

const ClassNotes: React.FC = () => {

    const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);
    useEffect(() => {
        const storedSections = localStorage.getItem('sections');
        if (storedSections) {
          setSections(JSON.parse(storedSections));
        }
      }, []);
    return (
        <div className="flex flex-row bg-bgGray min-h-screen">
            <Sidebar sections = {sections}/>
            <div className="w-full">
                {/* 수강과목 제목 헤더 */}
                <SectionInfo />
                {/* 노트가 있을 때 보여지는 페이지 */}
                {notes.length > 0 ? (
                    <NoteList notes={notes} />
                ) : (
                    <div className="h-full mt-[-100px] flex flex-col justify-center items-center ">
                        <div className="text-center pb-3 flex-shrink-0">
                            <p className="pretendard-font font-normal text-[20px] text-mainWhite">
                                노트를 만들어 보세요.
                            </p>
                            <p className="pretendard-font font-light text-[18px] text-mainWhite/[0.3] leading-6">
                                녹음을 하거나 파일을 업로드하면 <br />
                                텍스트로 확인할 수 있어요.
                            </p>
                        </div>
                        <div onClick={() => handleCreateNewFile()}>
                            <CreateNewFile />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const handleCreateNewFile = () => {
    // Handle the creation of a new file
    console.log('Create New File');
    // Add navigation or other logic here
};

interface NoteListProps {
    notes: Note[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
    return (
        <div className="p-6">
            {notes.map((note, index) => (
                <div key={index} className="flex flex-row items-center justify-between bg-darkGray p-4 mb-2 rounded">
                    <div className="flex items-center">
                        <Image src={`/${note.icon}.svg`} alt="status icon" width={24} height={24} className="mr-4" />
                        <p className="font-Pretendard text-[16px] text-mainWhite">{note.title}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p className="font-Pretendard text-[14px] text-mainWhite">{note.status}</p>
                        <p className="font-Pretendard text-[14px] text-mainWhite">{note.step}</p>
                        <p className="font-Pretendard text-[14px] text-mainWhite">{note.date}</p>
                        <p className="font-Pretendard text-[14px] text-mainWhite">{note.duration}</p>
                        <Image src="/delete-icon.svg" alt="delete icon" width={20} height={20} className="cursor-pointer" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassNotes;
