var defaultHtml = [
'<div>',
'   <h2 class="position-center">재능 MBTI</h2>',
'</div>',

'<div id="quiz-1" class="">',
'   <form class="well center-block col-md-6">',
'       <div class="form-group" id="questions-full">데이터 영역</div>',

'       <!--답변 버튼 영역-->',
'       <div class="btn btn-quiz btn-choose center-block btn-primary button-width" id="very-true" option-name="option1">그렇습니다</div>',
'       <div class="btn btn-quiz btn-choose center-block btn-primary button-width" id="true" option-name="option2">약간 그렇습니다</div>',
'       <div class="btn btn-quiz btn-choose center-block btn-primary button-width" id="neutral" option-name="option3">보통입니다</div>',
'       <div class="btn btn-quiz btn-choose center-block btn-primary button-width" id="false" option-name="option4">약간 아닙니다</div>',
'       <div class="btn btn-quiz btn-choose center-block btn-primary button-width" id="very-false" option-name="option5">아닙니다</div>',

'       <br><!--버튼과 프로그래스바와의 간격-->',

'       <div class="questionOutOf">진행 0/60</div>',
'       <div class="progress">',
'           <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">',
'               <span class="sr-only">--</span>',
'           </div>',
'       </div>',
        
'        <a class="btn btn-warning pull-left" id="btn-prev" href="index.html">첫화면</a>',
'       <button type="button" class="btn btn-danger pull-right" id="btn-reset">리셋</button>',
'   </form>',
'</div>',
].join('\n');

document.write(defaultHtml);

/*  불필요한 텍스트 노드를 삭제하고 싶을 경우
    map(function (s) { return s.trim(); }).join(''); */