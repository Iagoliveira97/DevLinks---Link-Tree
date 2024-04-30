function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('lightmode')

  const img = document.querySelector("#profile img") 
  
  if(html.classList.contains('lightmode')) {
  img.setAttribute('src', './assets/assets/Avatar2.png')
  } else {
  img.setAttribute("src", "./assets/assets/Avatar.png")
  }
}
