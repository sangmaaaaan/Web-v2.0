import React from 'react'

interface StateNumberProps {
  number: number;
}

const StateNumber: React.FC<StateNumberProps> = ({ number }) => {
  const numbers = [1, 2, 3];

  return (
    <div className="flex flex-row space-x-3">
      {numbers.map((num) => (
        <div
          key={num}
          className={`flex items-center justify-center w-12 h-12 bg-mainGreen rounded-full text-white text-xl ${
            num <= number ? 'opacity-100' : 'opacity-40'
          }`}
        >
          {num}
        </div>
      ))}
    </div>
  )
}

export default StateNumber