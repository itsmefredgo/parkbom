export interface admissionStep {
  stepNumber: number;
  stepTitle: string;
  stepDescription: string;
}

export const admissionSteps: admissionStep[] = [
  {
    stepNumber: 1,
    stepTitle: "입학 상담",
    stepDescription:
      "요즘에는 스트레스가 너무 많아서 머리가 아프고 집안일도 제대로 못 하겠어요. 좀 쉬어야겠지만, 할 일이 너무 많아서 어떡해야 좋을지 모르겠네요.",
  },
  {
    stepNumber: 2,
    stepTitle: "반 배정",
    stepDescription:
      "노란 고양이는 창밖을 보고 새 소리를 열심히 듣고 있지만 다람쥐는 땅굴 속에서 겨울잠을 자고 있어요. ",
  },
  {
    stepNumber: 3,
    stepTitle: "해피해피",
    stepDescription:
      "저는 매운 음식을 좋아하지 않지만, 친구가 너무 맛있다고 해서 곱창을 조금 먹어봤어요. 정말 매웠지만, 생각보다 맛이 없지는 않았어요. ",
  },
];
