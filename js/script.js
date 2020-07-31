//jquery 객체로 테스트 >> 2020.07.17
//jquery 객체를 Vanilla JS로 변경 진행 중 >> 2020.07.27-29

$(function () {

      const quiz = new Quiz();

      const updateProgress = function () {
        // 변경 전 jquery 소스 예시 : $( '.progress-bar' ).attr( "style", "width:" + quiz.questionPercentage() + "%" );
        document.querySelector('.progress-bar').setAttribute("style", "width:" + quiz.questionPercentage() + "%");
      };


// 다음 질문으로 넘어갈 경우 Progress bar가 1칸씩 올라가도록 구성
  const nextQuestion = function () {

    const nextQ = quiz.nextQuestion();

    // doument.getElementById 또는 ByClassName으로만 변경할 수 있으나 한계가 있음.
    // document.getElementById('questions-full').innerHTML("<p>" + nextQ.question + "</p>");
    $('#questions-full').html(nextQ.question);
    // document.getElementsByClassName('questionOutOf').innerHTML = document.inner('<p>' + '질문 ' + quiz.currentQuestion + '/60' + '</p>');
    $('.questionOutOf').html('질문 ' + quiz.currentQuestion + '/60');

    updateProgress();
  };

// 리셋
  const reset = function () {
    location.reload();
  }

// 답변 이후 진행방식
// MBTI 질문에 대한 답변이 될 경우 console log에 선택한 MBTI Type과 배점(point)가 표현됨
// 이후 60개를 모두 완료했을 경우 resultPage();로 이동
  const answer = function( event ) {
    const chosenOption = $( event.target ).attr( "option-name" );
    const questionHash = quiz.questions[ quiz.currentQuestion - 1 ];
    const questionType = questionHash[ chosenOption ][ "type" ];
    const questionPoint = questionHash[ chosenOption ][ "point" ];
    quiz.totalScore[ questionType ] += questionPoint;
    console.log( "Point " + questionType + "은 " + quiz.totalScore[ questionType ] );
    nextQuestion();
    resultPage();
  };

  // resultPage에 대한 정의
  // 60개의 항목을 모두 완료했을 경우, 
  // 기존 quiz 항목이 나왔던 ID는 hide(감추고)
  // ID값 result 부문 👉🏻 Index.html에 적용된 결과페이지 부문을 show(노출)하도록 구성
  // h1에는 각각 선택했던 type에 관한 결과값이 노출되도록 함
  // quiz.totalScore에 해당되는 내용과 일치하면 성향 표시 > console log에도 표현토록 함
  const resultPage = function() {
    if ( quiz.currentQuestion === 61 ) {
      $( '#quiz-1' ).hide();
      $( '#result' ).show();
      const lettersResult = [];
      let h1 = [];
      const extraversion = quiz.totalScore[ "extraversion" ];
      const introversion = quiz.totalScore[ "introversion" ];
      const sensing = quiz.totalScore[ "sensing" ];
      const intuition = quiz.totalScore[ 'intuition' ];
      const thinking = quiz.totalScore[ 'thinking' ];
      const feeling = quiz.totalScore[ 'feeling' ];
      const perceiving = quiz.totalScore[ 'perceiving' ]
      const judging = quiz.totalScore[ 'judging' ];

    // 공식 >> 2020.07.22 알고리즘 검토해볼 것 //MBTI를 산출하는 공식*
    // MBTI 관련 내용들을 섞어서 정리
    // 앞서 언급된 h1에 백분율(%)로 표현하기 위한 공식이기도 함
      if ( introversion > extraversion ) {
        let percent = Math.floor( ( introversion / ( introversion + extraversion ) * 100 ) )
        lettersResult.push( "I" );
        h1.push( "I:" + percent + "% " )
      } else if ( extraversion > introversion ) {
        let percent = Math.floor( ( extraversion / ( extraversion + introversion ) * 100 ) )
        lettersResult.push( "E" );
        h1.push( "E:" + percent + "% " )
      } else {
        lettersResult.push( "E" );
      };

      if ( sensing > intuition ) {
        let percent = Math.floor( ( sensing / ( sensing + intuition ) * 100 ) )
        lettersResult.push( "S" )
        h1.push( "S:" + percent + "% " )
      } else if ( intuition > sensing ) {
        let percent = Math.floor( ( intuition / ( intuition + sensing ) * 100 ) )
        lettersResult.push( "N" )
        h1.push( "N:" + percent + "% " )
      } else {
        lettersResult.push( "S" );
      };

      if ( thinking > feeling ) {
        let percent = Math.floor( ( thinking / ( thinking + feeling ) * 100 ) )
        lettersResult.push( "T" )
        h1.push( "T:" + percent + "% " )
      } else if ( feeling > thinking ) {
        let percent = Math.floor( ( feeling / ( feeling + thinking ) * 100 ) )
        lettersResult.push( "F" )
        h1.push( "F:" + percent + "% " )
      } else {
        lettersResult.push( "F" );
      };

      if ( perceiving > judging ) {
        let percent = Math.floor( ( perceiving / ( perceiving + judging ) * 100 ) )
        lettersResult.push( "P" )
        h1.push( "P:" + percent + "% " )
      } else if ( judging > perceiving ) {
        let percent = Math.floor( ( judging / ( judging + perceiving ) * 100 ) )
        lettersResult.push( "J" )
        h1.push( "J:" + percent + "% " )
      } else {
        lettersResult.push( "J" );
      };

// 60문항 풀이 후 최종 집계되는 결과
// 콘솔테스트 하면서체크해볼 것
// 
      console.log( quiz.totalScore )
      let h1Input = ""
      h1Input += "<h1>" + "재능교육 MBTI 결과 " + "<br>" + h1[ 0 ] + h1[ 1 ] + h1[ 2 ] + h1[ 3 ] + "</h1><br>"
      $( "h1" ).empty().append( h1Input )

      let typeResult = ""
      typeResult += lettersResult[ 0 ] + lettersResult[ 1 ] + lettersResult[ 2 ] + lettersResult[ 3 ]
      personalityMatch(typeResult);
    };
  }

// 결과값 매칭
  const personalityMatch = function(typeResult) {
    // document.getElementById('result').removeClass('hidden');
    $('#result').removeClass('hidden');
    $('#' + typeResult).removeClass('hidden');
    console.log(typeResult);
  }

// 리셋 버튼
  document.getElementById( 'btn-reset' ).click( reset );
  // $( '#btn-reset' ).click( reset );

// 답변 버튼
  // jquery 대체 진행 중 👉🏻[].forEach.call(document.getElementsByClassName( 'btn-quiz' ), function(el) {el.addEventListener('click( answer)');
  $( '.btn-quiz' ).click( answer );

  nextQuestion();
} );