/************************* */
//          データ置き場ここから           //
/************************* */
let displayNumber1 = 0;
let displayNumber2 = 0;

let answerHistories = []; // {displayNumber1: 1, displayNumber2: 3, answerNumber:4, isSuccess: false}

let questionLimit = 5;
let currentQuestionCount = 0;

let intervalInstance = null;

let elapsedTime;

/************************* */
//          データ置き場ここまで           //
/************************* */

/************************* */
//          関数置き場ここから           //
/************************* */
function generateRandom100 () {
  return Math.round(Math.random() * 100) // 0 ~ 10
}

function startTimer (){
  const timerElement = document.getElementById("timer");
  const firstTime = Date.now();

  // intervalInstanceはあとでsetIntervalを停止するために使う。
  intervalInstance = setInterval(() => {
    const elapsedTimeMillisecond = Date.now() - firstTime; // ミリ秒
    elapsedTime = (elapsedTimeMillisecond / 1000).toFixed(1); // 秒に変換して(1000で割る)、少数第一位まで四捨五入する(toFixed)
    timerElement.innerText = `${elapsedTime}秒経過`
  }, 100);
}

function stopTimer (){
  // setIntervalが裏で動き続けるため削除する必要がある。
  clearInterval(intervalInstance);
}

function start () {
  // タイマーカウント開始
  startTimer();

  // start ページ隠す
  const startPage = document.getElementById("startPage");
  startPage.hidden = true;
  
  // 問題ページ表示
  const questionPage = document.getElementById("questionPage");
  questionPage.hidden = false;
}


function setNextQuestion (){
  const successText = document.getElementById('success');
  successText.hidden = true;
  const unsuccessText = document.getElementById('unsuccess');
  unsuccessText.hidden = true;
  const userInput = document.getElementById("userInput");
  userInput.value = '';

  const displayNumber1Span = document.getElementById("displayNumber1");
  const displayNumber2Span = document.getElementById("displayNumber2");

  displayNumber1 = generateRandom100();
  displayNumber2 = generateRandom100();

  console.log("displayNumber1 * displayNumber2", displayNumber1 * displayNumber2)

  displayNumber1Span.innerText = displayNumber1;
  displayNumber2Span.innerText = displayNumber2;

  currentQuestionCount += 1;
} 

function showResult (){
  stopTimer();

  const questionPage = document.getElementById("questionPage");
  questionPage.hidden = true;

  const resultPage = document.getElementById("resultPage");
  resultPage.hidden = false;

  const timerResult = document.getElementById("timerResult");
  timerResult.innerText = `${elapsedTime}秒！`;

  const resultList = document.getElementById("resultList");
  
  for(let i = 0; i < answerHistories.length; i++){
    const answerHistory = answerHistories[i];
    let successText;
    if(answerHistory.isSuccess){
      successText = '正解'
    } else {
      successText = '不正解'
    }
    const listItemElement = document.createElement("li");
    listItemElement.innerText = `${answerHistory.displayNumber1} × ${answerHistory.displayNumber1} = ${answerHistory.answerNumber} | ${successText}`;
    resultList.appendChild(listItemElement);
  }
}

function keydownListener (event){
  if (event.key === 'Enter') {
     // inputの内容を取得
     console.log(event.key, "キーボード押下");
     const userInput = document.getElementById("userInput");
     const answerNumber = Number.parseInt(userInput.value);

     console.log(displayNumber1 * displayNumber2, answerNumber)

     // 答えチェック
     if(displayNumber1 * displayNumber2 === answerNumber){
      // 正解
      answerHistories.push({
        displayNumber1: displayNumber1,
        displayNumber2: displayNumber2,
        answerNumber: answerNumber,
        isSuccess: true
      })
    } else {
      // 不正解
      answerHistories.push({
        displayNumber1: displayNumber1,
        displayNumber2: displayNumber2,
        answerNumber: answerNumber,
        isSuccess: false
      })
    }

    // すべての問題に答えた？
    if(currentQuestionCount >= questionLimit){
      showResult();
    }else {
      setNextQuestion();
    }
  }
}


/************************* */
//        関数置き場ここまで           //
/************************* */

/************************* */
//         イベントリスナここから           //
/************************* */
const displayNumber1Span = document.getElementById("displayNumber1");
const displayNumber2Span = document.getElementById("displayNumber2");

// 初回描画
setNextQuestion();

window.document.onkeydown = keydownListener;

const startButton = document.getElementById("startButton");
startButton.onclick = start;

/************************* */
//        イベントリスナここまで           //
/************************* */