//drag and drop area

var upload = document.getElementById("upload");

function onFile() {
  var me = this,
    file = upload.files[0],
    name = file.name.replace(/.[^/.]+$/, "");
  console.log("upload code goes here", file, name);
}

upload.addEventListener(
  "dragenter",
  function (e) {
    upload.parentNode.className = "area dragging";
  },
  false
);

upload.addEventListener(
  "dragleave",
  function (e) {
    upload.parentNode.className = "area";
  },
  false
);

upload.addEventListener(
  "dragdrop",
  function (e) {
    onFile();
  },
  false
);

upload.addEventListener(
  "change",
  function (e) {
    onFile();
  },
  false
);

//redirect function

redirectToPage = function (selector, route) {
  var addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPage(".back-info", "/personalinfo/prsinfo.html");

//modal woindow

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnToList = document.querySelector(`.go-to-list`);
const btnToMain = document.querySelector(`.back-to-main`);

const btnOpenModal = document.querySelector(`.save-btn`);
console.log(btnOpenModal);

btnOpenModal.addEventListener(`click`, function () {
  console.log(`button clicked`);
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
});
