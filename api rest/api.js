var contenido = document.querySelector('#contenido')
function traer() {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => {
    console.log(data.results[0])
    contenido.innerHTML = `
      <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
      <p class="pt-2 mb-0">Hi, My name is:</p>
      <h2 class="text-capitalize">${data.results[0].name.first} ${data.results[0].name.last}</h2>
    `
  })
}