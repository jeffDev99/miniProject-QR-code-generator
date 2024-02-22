let $ = document;
let userInputEl = $.querySelector("#userInput");
let btnGenCodeEl = $.querySelector("#btnGenCode");
let qrCodeImgEl = $.querySelector("#qrCodeImg");
let wrapperEl = $.querySelector(".wrapper");

btnGenCodeEl.addEventListener("click", (e) => {
  let userInputVal = userInputEl.value.trim();
  if (userInputVal) {
    qrCodeImgEl.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${userInputVal}`
    );
    btnGenCodeEl.innerHTML = "Generating QR Code...";
    qrCodeImgEl.addEventListener("load", () => {
      wrapperEl.classList.add("active");
      btnGenCodeEl.innerHTML = "Generate QR Code";
    });
  }
});

userInputEl.addEventListener("keyup",(e)=>{
    if (!e.target.value.trim()) {
      wrapperEl.classList.remove("active");
    } 
})
