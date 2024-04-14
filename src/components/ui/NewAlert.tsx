"use client";

import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

function NewAlert() {
  const [alertOpen, setAlertOpen] = useState(true);
  const [alertstatus, setAlertstatus] = useState(true);

  const closeAlert = () => {
    setAlertOpen(false);
    // setTimeout(() => {
    setAlertstatus(false);
    // }, 1000);
  };

  return <Contents></Contents>;

  function Contents() {
    return (
      <div
        className={` fixed z-[100] w-screen bg-[#d3e0d7] p-8 flex justify-between
        ${
          alertstatus && alertOpen
            ? "animate-[slideDown_1s_ease-in-out_forwards]"
            : "animate-[slideUp_1s_ease-in-out_forwards]"
        }`}
      >
        <div className=" ">
          <h1 className=" text-[1.5rem]">알림 - 토플 시험 안내</h1>
          <div>
            <p>일시: 2024년 8월 31일</p>
            <p>장소: 거제 양지 초등학교</p>
            <p>대상: 박봄 영어 수강생 (초1~고3)</p>
          </div>
        </div>
        <div className=" flex items-end">
          <button onClick={() => closeAlert()}>
            <FaWindowClose className=" w-[2rem] h-[2rem]" />
          </button>
        </div>
      </div>
    );
  }
}

export default NewAlert;
