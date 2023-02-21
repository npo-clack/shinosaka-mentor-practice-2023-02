/********************* */
//    データ置き場        //
/********************* */
const tsubo1Info = {
  id: "tsubo1",
  name: "親指側",
  requiredMinimumClickCount: 5,
} 
const tsubo2Info = {
  id: "tsubo2",
  name: "小指側",
  requiredMinimumClickCount: 3,
} 
const tsubo3Info = {
  id: "tsubo3",
  name: "サイド",
  requiredMinimumClickCount: 1,
} 
const tsubo4Info = {
  id: "tsubo4",
  name: "つちふまず",
  requiredMinimumClickCount: 2,
} 
const tsubo5Info = {
  id: "tsubo5",
  name: "かかと",
  requiredMinimumClickCount: 1,
}
const accumulateClick = {
  tsubo1: 0,
  tsubo2: 0,
  tsubo3: 0,
  tsubo4: 0,
  tsubo5: 0,
}


/********************* */
//    データ置き場        //
/********************* */


/********************* */
//    関数置き場        //
/********************* */
function checkIsDone(){
  // すべてのツボを最低限クリックできていれば　true
  if(
    accumulateClick.tsubo1 >= tsubo1Info.requiredMinimumClickCount
    && accumulateClick.tsubo2 >= tsubo2Info.requiredMinimumClickCount
    && accumulateClick.tsubo3 >= tsubo3Info.requiredMinimumClickCount
    && accumulateClick.tsubo4 >= tsubo4Info.requiredMinimumClickCount
    && accumulateClick.tsubo5 >= tsubo5Info.requiredMinimumClickCount
  ){
    return true;
  }

  return false;
}
function onClickTsubo1 () {

  accumulateClick.tsubo1 += 1;

  console.log("tsubo1 clicked", accumulateClick.tsubo1)

  // 痛っと表示する。
  const itaiDiv = document.getElementById("itai");
  itaiDiv.hidden = false;

  setTimeout(() => {
    itaiDiv.hidden = true;
  }, 3000);

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}
function onClickTsubo2 () {

  accumulateClick.tsubo2 += 1;

  console.log("tsubo2 clicked", accumulateClick.tsubo2)

  // 痛っと表示する。
  const itaiDiv = document.getElementById("itai");
  itaiDiv.hidden = false;

  setTimeout(() => {
    itaiDiv.hidden = true;
  }, 3000);

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}
function onClickTsubo3 () {

  accumulateClick.tsubo3 += 1;

  console.log("tsubo3 clicked", accumulateClick.tsubo3)

  // 痛っと表示する。
  const itaiDiv = document.getElementById("itai");
  itaiDiv.hidden = false;

  setTimeout(() => {
    itaiDiv.hidden = true;
  }, 3000);

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}
function onClickTsubo4 () {

  accumulateClick.tsubo4 += 1;

  console.log("tsubo4 clicked", accumulateClick.tsubo4)

  // 痛っと表示する。
  const itaiDiv = document.getElementById("itai");
  itaiDiv.hidden = false;

  setTimeout(() => {
    itaiDiv.hidden = true;
  }, 3000);

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}
function onClickTsubo5 () {

  accumulateClick.tsubo5 += 1;

  console.log("tsubo5 clicked", accumulateClick.tsubo5)

  // 痛っと表示する。
  const itaiDiv = document.getElementById("itai");
  itaiDiv.hidden = false;

  setTimeout(() => {
    itaiDiv.hidden = true;
  }, 3000);

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}



/********************* */
//    関数置き場        //
/********************* */


/********************* */
//    イベントリスナー        //
/********************* */

const tsubo1 = document.getElementById("tsubo1");
const tsubo2 = document.getElementById("tsubo2");
const tsubo3 = document.getElementById("tsubo3");
const tsubo4 = document.getElementById("tsubo4");
const tsubo5 = document.getElementById("tsubo5");

tsubo1.onclick = onClickTsubo1;
tsubo2.onclick = onClickTsubo2;
tsubo3.onclick = onClickTsubo3;
tsubo4.onclick = onClickTsubo4;
tsubo5.onclick = onClickTsubo5;