let sections = document.getElementsByTagName("section")

let divs = document.getElementsByTagName("div")

for (div of divs) {
  div.classList.remove("hidden")
  div.classList.add("show")
}

window.addEventListener("scroll", function(event) {
  console.log(window.scrollY)
  if (window.scrollY > 500)
})

console.log(sections)
