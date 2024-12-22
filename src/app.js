const navButtonSolid = document.querySelector("#nav-button-solid")
const navButtonCross = document.querySelector("#nav-button-cross")
const navCover = document.querySelector("#nav-cover")

navButtonCross.addEventListener("click", () => {
  navCover.classList.add("hidden")
})

navButtonSolid.addEventListener("click", () => {
  navCover.classList.remove("hidden")
})
