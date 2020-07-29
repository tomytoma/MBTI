//jquery 객체로 테스트 >> 2020.07.17
$( function() {

  var quiz = new Quiz();

  var updateProgress = function() {
    document.querySelector( '.progress-bar' ).setAttribute( "style", "width:" + quiz.questionPercentage() + "%" );
  };


// 다음 질문
  var nextQuestion = function() {

    var nextQ = quiz.nextQuestion();

    // document.getElementById('questions-full').innerhtml("<p>" + nextQ.question + "</p>");
    $( '#questions-full' ).html( nextQ.question );

    $( '.questionOutOf' ).html( '질문 ' + quiz.currentQuestion + '/60' );
    // document.getElementsByClassName('questionOutOf').innerHTML = document.inner('<p>' + '질문 ' + quiz.currentQuestion + '/60' + '</p>');

    updateProgress();
  };


// 리셋
  var reset = function() {
    location.reload();
  }

// 답변
  var answer = function( event ) {
    var chosenOption = $( event.target ).attr( "option-name" );
    var questionHash = quiz.questions[ quiz.currentQuestion - 1 ];
    var questionType = questionHash[ chosenOption ][ "type" ];
    var questionPoint = questionHash[ chosenOption ][ "point" ];
    quiz.totalScore[ questionType ] += questionPoint;
    console.log( "포인트 " + questionType + " 은 " + quiz.totalScore[ questionType ] );
    nextQuestion();
    resultPage();
  };

  // 변수 등록 - 성향등록
  var resultPage = function() {
    if ( quiz.currentQuestion === 61 ) {
      $( '#quiz-1' ).hide();
      $( '#result' ).show();
      var lettersResult = [];
      var h1 = [];
      var extraversion = quiz.totalScore[ "extraversion" ];
      var introversion = quiz.totalScore[ "introversion" ];
      var sensing = quiz.totalScore[ "sensing" ];
      var intuition = quiz.totalScore[ 'intuition' ];
      var thinking = quiz.totalScore[ 'thinking' ];
      var feeling = quiz.totalScore[ 'feeling' ];
      var perceiving = quiz.totalScore[ 'perceiving' ]
      var judging = quiz.totalScore[ 'judging' ];

    // 공식 >> 2020.07.22 알고리즘 검토해볼 것 //MBTI를 산출하는 공식*
      if ( introversion > extraversion ) {
        var percent = Math.floor( ( introversion / ( introversion + extraversion ) * 100 ) )
        lettersResult.push( "I" );
        h1.push( "I:" + percent + "% " )
      } else if ( extraversion > introversion ) {
        var percent = Math.floor( ( extraversion / ( extraversion + introversion ) * 100 ) )
        lettersResult.push( "E" );
        h1.push( "E:" + percent + "% " )
      } else {
        lettersResult.push( "E" );
      };

      if ( sensing > intuition ) {
        var percent = Math.floor( ( sensing / ( sensing + intuition ) * 100 ) )
        lettersResult.push( "S" )
        h1.push( "S:" + percent + "% " )
      } else if ( intuition > sensing ) {
        var percent = Math.floor( ( intuition / ( intuition + sensing ) * 100 ) )
        lettersResult.push( "N" )
        h1.push( "N:" + percent + "% " )
      } else {
        lettersResult.push( "S" );
      };

      if ( thinking > feeling ) {
        var percent = Math.floor( ( thinking / ( thinking + feeling ) * 100 ) )
        lettersResult.push( "T" )
        h1.push( "T:" + percent + "% " )
      } else if ( feeling > thinking ) {
        var percent = Math.floor( ( feeling / ( feeling + thinking ) * 100 ) )
        lettersResult.push( "F" )
        h1.push( "F:" + percent + "% " )
      } else {
        lettersResult.push( "F" );
      };

      if ( perceiving > judging ) {
        var percent = Math.floor( ( perceiving / ( perceiving + judging ) * 100 ) )
        lettersResult.push( "P" )
        h1.push( "P:" + percent + "% " )
      } else if ( judging > perceiving ) {
        var percent = Math.floor( ( judging / ( judging + perceiving ) * 100 ) )
        lettersResult.push( "J" )
        h1.push( "J:" + percent + "% " )
      } else {
        lettersResult.push( "J" );
      };

// 60문항 풀이 후 최종 집계되는 결과
// 콘솔테스트 하면서체크해볼 것
      console.log( quiz.totalScore )
      var h1Input = ""
      h1Input += "<h1>" + "재능교육 MBTI 결과 " + "<br>" + h1[ 0 ] + h1[ 1 ] + h1[ 2 ] + h1[ 3 ] + "</h1><br>"
      $( "h1" ).empty().append( h1Input )

      var typeResult = ""
      typeResult += lettersResult[ 0 ] + lettersResult[ 1 ] + lettersResult[ 2 ] + lettersResult[ 3 ]
        // 테스트 검토 >> 2020.07.21
        // console.log(html)
      // $( "h1" ).append( html )
      personalityMatch(typeResult);
    };
  }

// 결과값 매칭
  var personalityMatch = function(typeResult) {
    // document.getElementById('result').removeClass('hidden');
    $('#result').removeClass('hidden');
    $('#' + typeResult).removeClass('hidden');
    console.log(typeResult);
  }

// 최종완료하면 음악과 함께 노출
  var audio = new Audio( );
// 리셋 버튼
  document.getElementById( 'btn-reset' ).click( reset );
  // $( '#btn-reset' ).click( reset );
// 답변 버튼
  $( '.btn-quiz' ).click( answer );
  //[].forEach.call(document.getElementsByClassName( 'btn-quiz' ), function(el) {el.addEventListener('click( answer)');
  nextQuestion();

} );