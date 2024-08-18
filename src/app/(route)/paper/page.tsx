"use client"
import React, { useEffect, useState } from 'react';
import NewNoteForm from '@/app/components/notes/NewNoteForm';
import Sidebar from '@/app/components/layout/Sidebar';
import CTANewNote from '@/app/components/button/CTANewNote';
import NewQuestionForm from '@/app/components/notes/NewQuestionForm';

const paper: React.FC = () => {
  const [sections, setSections] = useState<{ subject: string; professor: string; name: string }[]>([]);
  useEffect(() => {
    const storedSections = localStorage.getItem('sections');
    if (storedSections) {
      setSections(JSON.parse(storedSections));
    }
  }, []);
  return (
    <div className="flex flex-row bg-bgGray h-full">
      <Sidebar sections={sections} />
      <div className = "justify-between flex flex-col items-end w-full ">
        {/* 새로운 노트만들기 */}
        <NewQuestionForm />
        {/* 노트만들기 버튼 */}
        <div className = "p-8">
          <CTANewNote />
        </div>
      </div>
    </div>
  );
};

export default paper;
