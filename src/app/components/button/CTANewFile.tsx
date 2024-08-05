import React from 'react'

const CreateNewFile = () => {
  return (
    <button className = "cursor-pointer">
        <div className = "h-[46px] flex justify-center items-center w-[130px] flex-shrink-0  bg-[#3F3F3F] border-2 border-[#565656] rounded-[27px] hover:bg-[#282828] text-mainWhite hover:text-[#878787]" >
            <p className = "font-Pretendard text-[18px] text-center">노트 만들기</p>
        </div>
    </button>
  )
}

export default CreateNewFile