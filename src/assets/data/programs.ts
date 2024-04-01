export interface ProgramItem {
  programAttribute: string;
  description: string;
}

const programItems: ProgramItem[] = [
  {
    programAttribute: "소수정예반",
    description:
      "각반 정원 제한으로 모든 학생이 수업에 적극적으로 참여합니다. ",
  },
  {
    programAttribute: "1:1 개별지도",
    description:
      "학생의 특성에 맞춘 개인별 커리큘럼을 통해 양질의 수업을 제공합니다.",
  },
  {
    programAttribute: "맞춤 교재",
    description:
      "학생 개인별 강단점 분석의 바탕으로한 다향한 유형의 문제를 통하여 문제 해결 능력을 향상시킵니다.",
  },
  {
    programAttribute: "학교별 맞춤 전략",
    description:
      "학교별 내신 기출 문제 분석을 통하여 효율적으로 내신을 대비합니다.",
  },
  {
    programAttribute: "실전 모의고사",
    description:
      "학생들이 시험에 대비하면서 실제 시험과 유사한 환경에서 자신의 실력을 확인하도 실전 감각을 향상 시킬 수 있도록 도와줍니다.",
  },
  {
    programAttribute: "자기주도 학습력",
    description:
      "학생 중심 수업으로 학생이 스스로 학습 목표 설정 및 계획을 세우며, 주도적으로 학습 할 수 있도록 환경을 제공합니다.",
  },
];

export default programItems;
