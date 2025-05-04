/* criando a função*/
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("lighty")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("lighty")) {
    // se lighty mode on, substiruir imagem
    img.setAttribute("src", "./assets/avatar-light.png")
  } // se lighty mode off manter padrão
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
  // mudando atributo alt

  if (html.classList.contains("lighty")) {
    img.setAttribute("alt", "lamento, não foi possível encontrar a imagem")
  } else {
    img.setAttribute("alt", "Imagem não encontrada. Lamento pelo erro")
  }
}
