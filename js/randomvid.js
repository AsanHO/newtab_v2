const vids = ["PURSUIT.mp4", "jordan.mp4", "2.mp4"];

const chosenVid = vids[Math.floor(Math.random() * vids.length)];

const bgVid = document.createElement("video");
//video 가 아니라 vid로 지정해서 너무 오래걸림 ㅠ
bgVid.src = `vid/${chosenVid}`;
bgVid.muted = true;
//뮤트 거짓이면 재생안됨 - > 해결요망
bgVid.autoplay = true;
bgVid.loop = true;
document.body.appendChild(bgVid);

const video = document.querySelector("video");
