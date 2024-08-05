"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import SectionModify from '../modal/SectionModify';
import Link from 'next/link';

interface SectionFolderProps {
  subject: string;
  professor: string;
  onEdit: (subject: string, professor: string) => void;
  onDelete: () => void;
}

const SectionFolder: React.FC<SectionFolderProps> = ({ subject, professor, onEdit, onDelete }) => {
  const [showModify, setShowModify] = useState(false);

  const handleMenuClick = () => {
    setShowModify(!showModify);
  };

  return (
    <div className="relative items-center">
      <Link href = "/classNotes">
        <Image 
          src="/folder.svg" 
          alt="folder"
          width={240}
          height={140}
          className="cursor-pointer"
          onClick={handleMenuClick}
        />
      </Link>
      <div className = "flex justify-between w-full px-3 mt-[-60px]">
        <div className="flex flex-col">
          <p className="font-Pretendard text-[20px] text-mainBlack">{subject}</p>
          <p className="font-Pretendard text-[14px] text-mainBlack/[0.4]">{professor}</p>
        </div>
        <div className="flex flex-row gap-3">
          <Image 
            src="kebab-menu.svg" 
            alt="menu"
            width={20}
            height={20}
            onClick={handleMenuClick}
            className="cursor-pointer"
          />
          {showModify && (
            <div className="absolute right-[18px] top-[198px] mt-[-18px] rounded-[8px] shadow-2xl">
              <SectionModify 
                onEdit={(subject: string, professor: string) => {
                  onEdit(subject, professor);
                  setShowModify(false);
                }} 
                onDelete={() => {
                  onDelete();
                  setShowModify(false);
                }} 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionFolder;