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
      question: "You find it difficult to speak loudly.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You get bored if you have to read theoretical books.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You tend to sympathize with other people.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You value justice higher than mercy.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You rapidly get involved in the social life of a new workplace.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "The more people you speak to, the better you feel.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You tend to rely on your experience rather than on theoretical alternatives.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "As a rule, you proceed only when you have a clear and detailed plan.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You easily empathize with the concerns of other people.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "Often you prefer to read a book than go to a party.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "In a group, you enjoy being directly involved and at the centre of attention.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You are more inclined to experiment than to follow familiar approaches.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You are strongly touched by the stories about people's troubles.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "Deadlines seem to you to be of relative rather than absolute importance.",
      option1: { type: "perceiving",       point: 2 },
      option2: { type: "perceiving",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "judging",      point: 1 },
      option5: { type: "judging",      point: 2 }
    },
     {
      question: "You prefer to isolate yourself from outside noises.",
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
      question: "You think that almost everything can be analyzed.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: " For you, no surprises is better than surprises - bad or good ones.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You take pleasure in putting things in order.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You feel at ease in a crowd.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You have good control over your desires and temptations.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You easily understand new theoretical principles.",
      option1: { type: "sensing",       point: 2 },
      option2: { type: "sensing",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "intuition",      point: 1 },
      option5: { type: "intuition",      point: 2 }
    },
     {
      question: "You usually place yourself nearer to the side than in the center of the room.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "You willingly involve yourself in matters which engage your sympathies.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "A thirst for adventure is something close to your heart.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You easily perceive various ways in which events could develop.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "When solving a problem you consider the rational approach to be the best.",
      option1: { type: "thinking",       point: 2 },
      option2: { type: "thinking",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "feeling",      point: 1 },
      option5: { type: "feeling",      point: 2 }
    },
     {
      question: "You find it difficult to talk about your feelings.",
      option1: { type: "introversion",       point: 2 },
      option2: { type: "introversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "extraversion",      point: 1 },
      option5: { type: "extraversion",      point: 2 }
    },
     {
      question: "Your decisions are based on the feeling of a moment than thorough planning.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "It is easy for you to communicate in social situations.",
      option1: { type: "extraversion",       point: 2 },
      option2: { type: "extraversion",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "introversion",      point: 1 },
      option5: { type: "introversion",      point: 2 }
    },
     {
      question: "You feel more comfortable sticking to conventional ways.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
     {
      question: "You are easily affected by strong emotions.",
      option1: { type: "feeling",       point: 2 },
      option2: { type: "feeling",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "thinking",      point: 1 },
      option5: { type: "thinking",      point: 2 }
    },
     {
      question: "You are always looking for opportunities.",
      option1: { type: "intuition",       point: 2 },
      option2: { type: "intuition",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "sensing",      point: 1 },
      option5: { type: "sensing",      point: 2 }
    },
     {
      question: "You rarely deviate from your habits.",
      option1: { type: "judging",       point: 2 },
      option2: { type: "judging",       point: 1 },
      option3: { type: "none",          point: 0 },
      option4: { type: "perceiving",      point: 1 },
      option5: { type: "perceiving",      point: 2 }
    },
      {
      question: "dummy",
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