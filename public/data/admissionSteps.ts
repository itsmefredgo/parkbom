export interface admissionStep {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
}

export const admissionSteps: admissionStep[] = [
  {
    stepNumber: 1,
    stepTitle: "입학 상담",
    stepDescription: "상담은 전화 및 이메일 등으로 예약 후 진행됩니다",
  },
  {
    stepNumber: 2,
    stepTitle: "반 배정",
    stepDescription:
      "상담 후 반을 배정하며 경우에 따라 입학 테스트를 진행 될 수 있습니다.",
  },
  {
    stepNumber: 3,
    stepTitle: "등록",
    stepDescription:
      "첫 수업 이전에 수강료를 납부와 수업 동의서 작성이 마무리 됩니다.",
  },
];
