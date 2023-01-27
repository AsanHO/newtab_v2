const time = document.body.querySelector(".DWtimer");
const token = document.body.querySelector(".DWtoken");
const play = document.body.querySelector(".play");
const reset = document.body.querySelector(".reset");
let sec = 0;
let DWtoken = 0;
let isPlay = false;
let isDW = false;

setInterval(() => {
  if (isPlay) {
    sec = sec + 1;
    now = new Date(sec * 1000);
    timeString = now.toISOString().split("T00:")[1].split(".")[0];
    time.innerText = timeString;
    if (sec == 2700) {
      if (isDW) {
        DWtoken++;
      }
      sec = 0;
      isDW = true;
      DWtoken++;
      token.innerText = DWtoken;
    }
  }
}, 1000);

const clickPlay = () => {
  isPlay = !isPlay;
  isDW = false;
};
const clickReset = () => {
  isPlay = false;
  sec = 0;
  DWtoken = 0;
  token.innerText = DWtoken;
  time.innerText = "00:00";
  console.log("done");
};

play.addEventListener("click", clickPlay);
reset.addEventListener("click", clickReset);
