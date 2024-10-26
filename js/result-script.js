import { resultData } from "../data/result.js";

function getIdFromUrl() {
  const url = window.location.href;
  const urlObj = new URL(url);
  const id = urlObj.searchParams.get("id");

  return id;
}
const param = getIdFromUrl();

const SUB_TITLE = document.querySelector("#result .title-cont .sub-title");
const TITLE = document.querySelector("#result .title-cont .title span");
const HEROIMG = document.querySelector("#result .hero-img");

SUB_TITLE.innerHTML = resultData[param].sub;
TITLE.innerHTML = resultData[param].title;
HEROIMG.src = `https://knag091.github.io/iAmHero/img/end/${param}.png`;

const DETAILS_LIST = document.querySelector(
  "#result .detail-cont.result .list"
);
for (const cont of resultData[param].detail) {
  const liElement = document.createElement("li");
  liElement.textContent = cont;
  DETAILS_LIST.appendChild(liElement);
}
