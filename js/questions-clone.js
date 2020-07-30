var Quiz = function() {
  this.currentQuestion = 0;

  this.totalScore = {
    extraversion: 0,
    introversion: 0,
    sensing: 0,
    intuition: 0,
    thinking: 0,
    feeling: 0,
    judging: 0,
    perceiving: 0,
    none: 0
  };

  this.questions = [
    {
      question: "나는 약속에 거의 늦지 않습니다.",
      option1: { type: "judging",  point: 2 },
      option2: { type: "judging",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "perceiving", point: 1 },
      option5: { type: "perceiving", point: 2 }
    },
    {
      question: "나는 활동적이고 빠른 일에 종사하는 것을 좋아합니다.",
      option1: { type: "extraversion",  point: 2 },
      option2: { type: "extraversion",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "introversion", point: 1 },
      option5: { type: "introversion", point: 2 }
    },
    {
      question: "나는 넓은 범위의 지인과의 관계를 즐겨합니다.",
      option1: { type: "extraversion",  point: 2 },
      option2: { type: "extraversion",  point: 1 },
      option3: { type: "none",     point: 0 },
      option4: { type: "introversion", point: 1 },
      option5: { type: "introversion", point: 2 }
    },
    {
      question: "나는 쇼파에서 TV를 시청할때 몰입합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
    {
      question: "나는 보통 갑작스러운 사건에 가장 먼저 반응하는 사람입니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
    {
      question: "나는 세상 모든 것에 연민을 품고 있습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
    {
      question: "나는 세상의 모든 것이 연관되어져 있다고 생각합니다.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
    {
      question: "정해진 규칙을 엄격히 준수하면 좋은 결과를 얻지 못한다고 생각합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
    {
      question: "나는 들뜨게 만드는 것은 어렵습니다.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "나는 결정을 내릴 때, 분석보다는 감정에 더 의존합니다 .",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "나는 종종 인류와 인류의 운명에 관해 생각합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "최선의 결정은 쉽게 바꿀 수 있는 결정이라고 생각합니다.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "나는 종종 문제의 근본 원인을 숙고합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "나는 다양한 대응방안을 생각하기 보다 즉시 행동하는 것을 중시합니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "나는 이성적인 판단을 감성적인 판단 보다 더 신뢰합니다.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "나는 사전 계획 보다 임기응변적인 대응에 의존하는 경향이 있습니다.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "나는 여가 시간을 적극적으로 사람들과 관계 맺는데 사용합니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "나는 일반적으로 행동을 미리 예측하고 계획합니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "나의 행동은 감정에 자주 영향을 받습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "나는 의사소통에 있어서 다소 내성적이고 거리감이 있는 사람입니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "매 순간의 시간을 좋은 목적에 쏟는 방법을 알고 있습니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "나는 종종 인생의 복잡성을 고려합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "오랜 친교 후에 가끔 나는 그 들과 멀리 떨어져서 혼자 있을 필요가 있다고 생각합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "급하게 서두릅니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "특정 사건의 이면에 있는 일반적인 원리를 쉽게 깨달을 수 있습니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "나는 기분과 감정을 편안하게 여러번 표현합니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "큰소리로 말하는 것이 어렵다고 생각합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "나는 이론적인 책을 읽는 것이 지루합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "나는 다른 사람을 동정하는 경향이 있습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "나는 자비보다 정의를 더 중시합니다",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "나는 새로운 직장의 생활에 빠르게 적응합니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "말을 많이 하면 할수록 기분이 좋아집니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "나는 이론적인 대안보다는 경험에 의존하는 경향이 있습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "원칙적으로는 명확하고 세부적인 계획이 있을 때만 진행합니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "다른 사람들의 관심사에 쉽게 공감합니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "파티에 가는 것보다 책을 읽는 것을 더 좋아합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "특정 그룹에서, 직접적으로 관여하고 관심의 중심에 있는 것을 즐깁니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "익숙한 접근법을 따르는 것보다 실험하는 경향이 있습니다.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "사람들의 고민에 대한 이야기에 큰 감동을 받습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "마감일은 절대적으로 중요하기 보다는 상대적인 것으로 느껴집니다.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "외부 언급으로부터 자신을 격리시키는 것을 선호합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "It is essential for you to try things with your own hands.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "내 손으로 직접하는 것을 선호합니다.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: "놀라움보다는 평온한 것을 추구합니다.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "나는 일을 정리하는 것을 즐깁니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "군중 속에서 편안함을 느낍니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "욕구와 유혹을 잘 통제합니다.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "새로운 이론 원리를 쉽게 이해합니다.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: " 보통 방의 중앙보다 옆쪽에 더 가까이 앉습니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "연민을 느끼는 것에 기꺼이 관여합니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "도전에 대한 갈망이 있습니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "사건들이 어떻게 전개될 수 있는지를 쉽게 인지합니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "문제를 해결할 때 합리적인 접근법을 최고로 여깁니다.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "감정에 대해 말하는 것이 어렵다고 생각합니다.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "내 결정은 결정은 철저한 계획보다 순간의 느낌에 기초합니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "사회적인 상황에서 소통하는 것이 쉽습니다.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "전통적인 방식을 고수하는 것이 더 편안함을 느낍니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "강한 감정적인 상황에 쉽게 영향을 받습니다.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "나는 항상 기회를 찾고 있습니다.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "습관이 좀처럼 고쳐지지 않습니다.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
      {
      question: "행복을 추구합니다.",
      option1: { type: "thinking",       point: 0 },
      option2: { type: "thinking",       point: 0 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 0 },
      option5: { type: "feeling",      point: 0 }
    }
    ];
};

Quiz.prototype.questionPercentage = function(){
  return (this.currentQuestion - 1) / 59 * 100;
};

Quiz.prototype.nextQuestion = function(){
  return this.questions[this.currentQuestion++];
};

Quiz.prototype.answer = function(){

};