var button = document.querySelector(".container")

let state = {
  click: false
}

button.addEventListener("click",()=>{
  if (state.click) {
    button.classList.remove("clicked");
    state.click = false;
    button.textContent = "jump to Google";
  } else {
    button.classList.add("clicked");
    state.click = true;
    button.textContent = "jumped to Google";
  }
})



