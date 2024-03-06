"use client";

import "./Methods.css";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./Methods.module.css"; // Import your CSS module

interface MethodItem {
  title: string;
  description: string;
}

export default function HomeMethods() {
  const methodItems: MethodItem[] = [
    {
      title: "소수정예반",
      description:
        "소수정예반은 일반 수업보다 높은 난이도와 심화된 내용을 제공하는 수업입니다. 높은 학습 능력과 흥미를 가진 학생들을 대상으로 하며, 일반적으로 더 고급 수학 및 과학 주제에 초점을 맞출 수 있습니다.",
    },
    {
      title: "1:1 개별지도",
      description:
        "개별지도는 개별 학생의 학습 수준과 필요에 맞게 맞춤형 지도를 제공하는 수업 형태입니다. 학생 개개인의 강점과 약점을 고려하여 개인별 맞춤 교육을 제공하며, 학습 속도와 스타일에 맞춰 유연하게 조절됩니다.",
    },
    {
      title: "학교별 맞춤 전략",
      description:
        "학교별 맞춤 전략은 특정 학교의 교육 체계와 요구에 맞게 수업을 설계하는 것을 의미합니다. 학교가 특정 교육 방식을 강조하거나 특별한 교육 목표를 가지고 있을 때 이를 반영하여 학생들에게 맞춤형 교육을 제공합니다.",
    },
    {
      title: "실전 모의고사",
      description:
        "실전 모의고사는 학생들에게 실제 시험과 유사한 환경에서 모의고사를 치르게 하는 수업입니다. 학생들이 시험에 대비하면서 실제 시험과 유사한 상황에서 자신의 실력을 확인하고 향상시킬 수 있도록 도와줍니다.",
    },
    {
      title: "기초/개념 이해",
      description:
        "기초/개념 이해는 학문의 기초적인 원리와 개념을 학생들에게 이해시키는 데 중점을 둔 수업입니다. 기본 개념을 탄탄하게 이해하고 익힘으로써 학문 전반에 걸쳐 깊은 이해를 기반으로 하는 학습을 가능케 합니다.",
    },
    {
      title: "자기주도 학습력",
      description:
        "자기주도 학습력은 학생이 스스로 학습 목표를 설정하고 학습 계획을 세우며, 주도적으로 학습하는 능력을 의미합니다. 이는 학생들이 미래에도 계속해서 새로운 지식을 습득하고 스스로 문제를 해결할 수 있는 역량을 갖추는 데 도움이 됩니다.",
    },
  ];

  // State to track the selected item and its description
  const [selectedItem, setSelectedItem] = useState<MethodItem>({
    title: "수업 방향",
    description:
      "저희 박봄수학영어에서는 학생들의 수준, 특성, 학습 스타일에 맞추어 수업들이 진행됩니다. ",
  });

  // Function to handle item selection
  const handleItemSelected = (title: string, description: string) => {
    // Toggle between selecting and unselecting
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem?.title === title
        ? {
            title: "수업 방향",
            description:
              "저희 박봄수학영어에서는 학생들의 수준, 특성, 학습 스타일에 맞추어 수업들이 진행됩니다. ",
          }
        : { title, description }
    );
  };
  return (
    <section className="home-methods">
      <div className="home-methods-title">
        <div className="methods-title">
          <h1>About Us</h1>
        </div>
        <div className="viewmore-link">
          <button>자세히보기</button>
        </div>
      </div>
      <div className="home-methods-contents">
        <div className="contents-grid-selected-item">
          <div className="selected-item-title">
            <div className="selected-item-title-text">{selectedItem.title}</div>
          </div>
          <div className="selected-item-description">
            {selectedItem.description}
          </div>
        </div>
        <div className="methods-contents-grid">
          {/* <div className="contents-grid-item">소수정예</div>
          <div className="contents-grid-item">개별지도</div>
          <div className="contents-grid-item">학교별 맞춤 전략</div>
          <div className="contents-grid-item">실전 모의고사</div>
          <div className="contents-grid-item">소수정예</div>
          <div className="contents-grid-item">개별지도</div> */}
          {methodItems.map(({ title, description }, index) => (
            <div
              key={index}
              className={`contents-grid-item ${selectedItem?.title === title ? styles.selected : ""}`}
              onClick={() => handleItemSelected(title, description)}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
