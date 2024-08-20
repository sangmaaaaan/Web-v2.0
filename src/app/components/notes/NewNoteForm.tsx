"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import CTANewNote from '../button/CTANewNote';
import LoadingModal from '../modal/LoadingModal';

const NewNoteForm = () => {
  const [form, setForm] = useState({
    folder: '',
    professor: '',
    file: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onDrop = (acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    const formData = new FormData();
    formData.append('folder', form.folder);
    formData.append('professor', form.professor);
    if (file) {
      formData.append('file', file);
    }

    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-full bg-bgGray text-white p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-[15px] font-Pretendard font-normal text-mainWhite">노트 정보를 입력해 주세요</label>
          <input
            type="text"
            name="file"
            value={form.file}
            onChange={handleChange}
            placeholder="예) 캡스톤디자인 1주차"
            className="mt-1 block bg-bgGray text-mainWhite text-[22px] rounded-md py-1 pr-2 pl-0 outline-none"
          />
        </div>
        <div className="flex flex-row gap-12">
          <label className="text-[16px] text-start font-normal font-Pretendard text-mainWhite justify-center flex flex-col items-center">폴더</label>
          <input
            type="text"
            name="folder"
            value={form.folder}
            onChange={handleChange}
            className="mt-1 bg-[#252424] text-white h-[34px] w-[150px] rounded-[20px] px-3 outline-none"
          />
        </div>
        <div className="flex flex-row gap-9">
          <label className="text-[16px] font-normal font-Pretendard text-mainWhite justify-center flex flex-col text-center items-center">교수자</label>
          <input
            type="text"
            name="professor"
            value={form.professor}
            onChange={handleChange}
            className="mt-1 bg-[#252424] text-white h-[34px] w-[120px] rounded-[20px] outline-none px-3"
          />
        </div>
        <div className="flex flex-row gap-5">
          <label className="text-[16px] mt-[8px] font-normal font-Pretendard text-mainWhite justify-start flex flex-col text-start items-start flex-shrink-0">강의 음성</label>
          <div className="mt-1 flex justify-between w-full">
            <div {...getRootProps()} className="flex flex-col justify-start w-[730px] h-32 rounded-[12px] p-5 cursor-pointer bg-[#252424] text-gray-400 hover:text-gray-500 hover:bg-bgDeepGray">
              <input {...getInputProps()} />
              {!file ? (
                <>
                  <div className="flex flex-col text-start items-start justify-start">
                    <p className="mb-1 text-sm text-[#D9D9D9]">
                      <span className="font-normal">파일을 업로드 하거나 클릭하세요</span>
                    </p>
                    <p className="text-xs text-gray-500">&apos;파일 첨부&apos;를 클릭하거나 영상 파일을 직접 끌어다 놓으세요.(파일 길이: 최대 120분, 지원 형식: mp4,mov)</p>
                  </div>
                  <div className="mt-3 flex flex-col justify-end items-end">
                  <button className="pr-3 pl-2 py-2 flex flex-row gap-1 rounded-md bg-[#5F5F5F]">
      <Image src="icon_upload.svg" alt="file-upload" width={22} height={22} />
      <span className="text-[14px] text-mainWhite">파일 첨부</span>
    </button>
  </div>
  </>
) : (
  <div className="flex flex-col text-start items-start justify-start">
    <p className="mb-1 text-sm text-[#D9D9D9]">
      <span className="font-normal">파일 이름: {file.name}</span>
    </p>
    <p className="text-xs text-gray-500">파일 형식: {file.type}</p>
  </div>
)}
</div>
</div>
</div>
{/* <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">노트 만들기</button> */}
</form>
<LoadingModal isOpen={isModalOpen} onRequestClose={closeModal} />
</div>
);
};

export default NewNoteForm;