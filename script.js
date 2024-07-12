function toggleMode() {
  let html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img");
  if(html.classList.contains("light")){
    img.setAttribute("src", "./assets/avatarLucas-light.png")
    img.setAttribute(
      "alt", "Foto de Lucas usando boné virado para trás, oculos escuro e camisa cinza com a paisagem de uma praia com vegetação ao fundo."
    )
  }else{
    img.setAttribute("src", "./assets/avatarLucas.png")
    img.setAttribute(
      "alt", "Foto de Lucas usando boné branco e camiseta branca com a paisagem de uma praia ao fundo."
    )
  }
}
