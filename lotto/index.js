const candidate = Array(45)
  .fill()
  .map((element, index) => index + 1);
const suffle = [];
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  suffle.push(value);
}
console.log(suffle);
const winBalls = suffle.slice(0, 6).sort((a, b) => a - b);
const bonus = suffle[6];
console.log(winBalls, bonus);

const $bonus = document.querySelector("#bonus");
const $result = document.querySelector("#result");

const showBall = (number, $target) => {
  const span = document.createElement("span");
  span.className = "ball";
  span.textContent = number;
  $target.appendChild(span);
};
for (let i = 0; i < 6; i++) {
  setTimeout(() => {
    showBall(winBalls[i], $result);
  }, (i + 1) * 1000);
}

setTimeout(() => {
  showBall(bonus, $bonus);
}, 7000);

// for (let i = candidate.length; i > 0; i--) {
//   const random = Math.floor(Math.random() * candidate.length);
//   const spliceArray = candidate.splice(random, 1);
//   const value = spliceArray[0];
//   suffle.push(value);
// }
