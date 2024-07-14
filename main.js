"use strict";
{
  //最初の時間を設定とりあえず5分(3000秒)
  let remain_time = 30;

  const second_time = document.getElementById("second_time");
  const intervalid = setInterval(count_down, 1000);
  function count_down() {
    remain_time--;
    let minute = Math.floor(remain_time / 60);
    let second = remain_time % 60;
    second_time.innerHTML =
      ("0" + minute).slice(-2) + ":" + ("0" + second).slice(-2);
    if (remain_time <= 0) {
      clearInterval(intervalid);
    }
  }
}
