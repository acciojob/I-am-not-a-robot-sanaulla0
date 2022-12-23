//your code here

// let btnreset = document.getElementById('reset');
// let btnverify = document.getElementById('verify');

// let send= [];
// let img1 = document.getElementsByClassName("img1");
// send.push(img1);
// let img2 = document.getElementsByClassName("img2");
// send.push(img2);
// let img3 = document.getElementsByClassName("img3");
// send.push(img3);
// let img4 = document.getElementsByClassName("img4");
// send.push(img4);
// let img5 = document.getElementsByClassName("img5");
// send.push(img5);

// send.push(maindiv);
let p =document.getElementById('para');
let mainDiv = document.getElementById('main');
for (let i = 1; i <= 5; i++) {
 let img = document.createElement('img');
 img.setAttribute('src', `images/${i}.jpg`);
 img.setAttribute('data-ns-img', i)
 img.onclick = function (e) {
     readCaptcha(this);
 };
 img.height = 100;
 img.width = 100;
 mainDiv.append(img);
}








let n = Math.floor(Math.random()*5)+1;
let img = document.createElement('img');
img.setAttribute('src',`images/${n}.jpg`);
img.setAttribute('data-ns-img',n);
img.height= 100;
img.width= 100;

img.onclick=function(e){
 readCaptcha(this);
};
mainDiv.append(img);

let flag = false;
let click1 = 0;
let click2 = 0;
let verify = document.createElement('button');
verify.innerHTML = 'Verify';

let reset = document.createElement('button');
reset.innerHTML = 'Reset';

if(click1==0&&click2==0){
  p.innerText = 'Please click on the identical tiles to verify that you are not a robot '
}


function readCaptcha(e) {
 console.log(e.getAttribute('data-ns-img'));
 // captcha.push(e.getAttribute('data-ns-img'));
 // console.log(captcha);
 if (flag != false)
     click2 = e.getAttribute('data-ns-img');
 else
     click1 = e.getAttribute('data-ns-img');

 // flag = true;
 console.log(click1, click2);

 if (click1 != 0 && flag == false && !mainDiv.contains(reset)) {

     mainDiv.append(reset);
     reset.onclick = resetCaptcha;
 }
 if (click1 != 0 && click2 != 0 && !mainDiv.contains(verify)) {
     // let verify = document.createElement('button');
     // verify.innerHTML = 'Verify';
     mainDiv.append(verify);
     verify.onclick = checkCaptcha;
 }
 flag = true;
} 
// 
function checkCaptcha() {
 if (click1 == click2) {
     console.log('verified');
     p.innerText="You are a human. Congratulations!"
 }
 else {
     console.log('not verified');
     p.innerText="We can't verify you as a human. You selected the non-identical tiles.";
 }
}

function resetCaptcha() {
  location.reload();
 // click1 = 0;
 // click2 = 0;
   flag = false;
}