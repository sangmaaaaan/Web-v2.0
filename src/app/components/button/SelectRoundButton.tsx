"use client";
import React, { useState } from 'react';

interface SelectRoundButtonProps {
  label: string;
  onClick: () => void;
}

const SelectRoundButton: React.FC<SelectRoundButtonProps> = ({ label, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick();
  };

  return (
    <button
      className={`flex items-center justify-center py-2 px-4 hover:bg-mainGreen rounded-full ${isSelected ? 'bg-mainGreen' : 'bg-[#3F3F3F]'} text-white`}
      onClick={handleClick}
    >
      <p className="font-Pretendard font-normal text-center text-lg">{label}</p>
    </button>
  );
};

export default SelectRoundButton;