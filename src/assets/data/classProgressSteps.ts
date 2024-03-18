export interface ClassProgressStep {
  stepTitle: string;
  description: string;
}

const classProgressSteps: ClassProgressStep[] = [
  {
    stepTitle: "1. 예습 (준비)",
    description:
      "목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는 것",
  },
  {
    stepTitle: "2. 능동 학습 (참여)",
    description:
      "목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는 것",
  },
  {
    stepTitle: "3. 복습 및 정리",
    description:
      "목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는 것",
  },
  {
    stepTitle: "4. 반성 및 응용",
    description:
      "목표: 집중적으로 배우기 전에 자료에 대한 일반적인 이해를 습득하는 것",
  },
];

export default classProgressSteps;
