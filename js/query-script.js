import { queryData } from "../data/query.js";

let state = true;
let level = 0;
const CONTAINER = document.querySelector("#query .container");
const QUESTION = document.querySelector("#query .query-cont .question");
const CHOICES = document.querySelectorAll("#query .query-cont .choice .cont");
let data = queryData;
const result = [0, 0];

CONTAINER.addEventListener("click", function () {
  if (state) {
    document.querySelector("#query .guide-cont").classList.remove("active");
    document.querySelector("#query .query-cont").classList.add("active");

    query_function();

    state = false;
  }
});

function writeChoice() {
  if (queryData[level - 1]) {
    CHOICES[0].classList.remove(queryData[level - 1].answer[0][1]);
    CHOICES[1].classList.remove(queryData[level - 1].answer[1][1]);
  }

  if (!queryData[level]) return;

  QUESTION.innerHTML = queryData[level].query;
  CHOICES[0].innerHTML = queryData[level].answer[0][0];
  CHOICES[1].innerHTML = queryData[level].answer[1][0];

  CHOICES[0].classList.add(queryData[level].answer[0][1]);
  CHOICES[1].classList.add(queryData[level].answer[1][1]);
}

function choiceFunction(event) {
  result[data[level].type] =
    result[data[level].type] + Number(event.target.classList[1]);

  if (level >= data.length - 1) {
    let res = "";

    if (result[0] > 0) res += "e";
    else if (result[0] < 0) res += "i";

    if (result[1] > 0) res += "j";
    else if (result[1] < 0) res += "p";

    location.href = `https://knag091.github.io/iAmHero/result.html?id=${res}`;

    return;
  }

  const LOADER = document.querySelectorAll("#query .beat-loader");

  level += 1;

  if (LOADER[level]) LOADER[level].classList.add("active");

  writeChoice();
}
CHOICES[0].addEventListener("click", function (event) {
  choiceFunction(event);
});
CHOICES[1].addEventListener("click", function (event) {
  choiceFunction(event);
});

function query_function() {
  data = data.sort(() => Math.random() - 0.5);

  for (const cont of data)
    cont.answer = cont.answer.sort(() => Math.random() - 0.5);

  writeChoice();
}
