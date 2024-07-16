"use strict";
{
  //最初の時間を設定とりあえず5分(3000秒)
  let remain_time = { first_time: { time: 300 }, second_time: { time: 300 } };

  //どちらの番がわかるflag(trueが上の番)
  let turn_flag = true;

  const second_time = document.getElementById("second_time");
  const touch_panel_second = document.getElementById("second");
  const touch_panel_first = document.getElementById("first");

  touch_panel_first.addEventListener("touchstart", (e) => {
    start_count(e.target.id);
  });
  touch_panel_second.addEventListener("touchstart", (e) => {
    start_count(e.target.id);
  });

  let intervalid = {};

  function start_count(target_id) {
    if (target_id === "second_time") {
      turn_flag = false;
    }
    intervalid[target_id] = setInterval(() => count_down(target_id), 1000);
  }

  function count_down(target_id) {
    remain_time[target_id].time--;
    let minute = Math.floor(remain_time[target_id].time / 60);
    let second = remain_time[target_id].time % 60;
    document.getElementById(target_id).innerHTML =
      ("0" + minute).slice(-2) + ":" + ("0" + second).slice(-2);
    if (remain_time[target_id].time <= 0) {
      clearInterval(intervalid[target_id]);
    }
    turn_flag = !turn_flag;
  }
}
