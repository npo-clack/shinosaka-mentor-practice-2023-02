/********************* */
//    データ置き場        //
/********************* */
const tsuboList = [
  {
    id: "tsubo1",
    name: "親指側",
    requiredMinimumClickCount: 5,
  }, 
  {
    id: "tsubo2",
    name: "小指側",
    requiredMinimumClickCount: 3,
  }, 
  {
    id: "tsubo3",
    name: "サイド",
    requiredMinimumClickCount: 1,
  }, 
  {
    id: "tsubo4",
    name: "つちふまず",
    requiredMinimumClickCount: 2,
  }, 
  {
    id: "tsubo5",
    name: "かかと",
    requiredMinimumClickCount: 1,
  }
];

const accumulateClick = {
  tsubo1: 0,
  tsubo2: 0,
  tsubo3: 0,
  tsubo4: 0,
  tsubo5: 0,
}

const targetTsuboIds = ['tsubo1', 'tsubo2', 'tsubo5'];


/********************* */
//    データ置き場        //
/********************* */


/********************* */
//    関数置き場        //
/********************* */
function checkIsDone(){
  // すべてのツボを最低限クリックできていれば　true
  let isClear = true;

  for(let i = 0; i < targetTsuboIds.length; i++){
    const targetTsuboId = targetTsuboIds[i];

    for(let j = 0; j < tsuboList.length; j++){
      const tsubo = tsuboList[i];
      if(tsubo.id === targetTsuboId){
        if(accumulateClick[targetTsuboId] >= tsubo.requiredMinimumClickCount){
          isClear = isClear && true;
        } else {
          // 1つでもfalseが交じると以後false
          isClear = isClear && false;
        }
        break;
      }
    }
  }

  return isClear;
}

function onClickTsubo (tsuboId) {

  accumulateClick[tsuboId] += 1;

  console.log(`${tsuboId} clicked`, accumulateClick[tsuboId])

  if(targetTsuboIds.includes(tsuboId)){
    // 痛っと表示する。
    const itaiDiv = document.getElementById("itai");
    itaiDiv.hidden = false;

    setTimeout(() => {
      itaiDiv.hidden = true;
    }, 300);
  }

  // 最低クリック回数をチェックする
  if(checkIsDone()){
    // 完了を表示
    const doneDiv = document.getElementById("done");
    doneDiv.hidden = false;
  }
}

function onClickTsubo1 () {
  onClickTsubo('tsubo1');
}

function onClickTsubo2 () {
  onClickTsubo('tsubo2');
}

function onClickTsubo3 () {
  onClickTsubo('tsubo3');
}

function onClickTsubo4 () {
  onClickTsubo('tsubo4');
}

function onClickTsubo5 () {
  onClickTsubo('tsubo5');
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