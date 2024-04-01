export interface ClassProgressStep {
  stepTitle: string;
  description: string;
}

const classProgressSteps: ClassProgressStep[] = [
  {
    stepTitle: "1. 개념 이해",
    description:
      "기초 개념을 이해하고, 이를 바탕으로 문제를 해결하는 방법을 익힙니다.",
  },
  {
    stepTitle: "2. 유형 익히기",
    description:
      "다양한 유형의 문제를 풀어보며, 문제 유형에 따른 해결 방법을 익힙니다.",
  },
  {
    stepTitle: "3. 심층 학습 및 실전 평가",
    description:
      "심화된 문제를 풀어보며, 실전에서의 문제 해결 능력을 향상시킵니다.",
  },
  {
    stepTitle: "4. 개인별 문제점 해결",
    description:
      "학생 개개인의 문제점을 파악하고, 이를 해결하는 방법을 찾아냅니다.",
  },
];

export default classProgressSteps;
