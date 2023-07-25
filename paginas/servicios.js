function addCard(params = [{}]) {
  const servContent = document.createElement("div");
  servContent.innerHTML = `
<template id="card-template">
          <div class="card">
          <img src="" class="card-img" />
          <div class="card-content">
          <h2 class="card-content-titulo"></h2>
          <p class="card-content-descripcion"></p>
          <a href="" class="card-content-link">Ver más</a>
          </div>
          </div>
</template>`;
  const base = document.querySelector(".portfolio-content");
  const template = servContent.querySelector("#card-template");
  template.content.querySelector(".card-content-titulo").textContent =
    params.title;
  template.content.querySelector(".card-img").src = params.img;
  template.content.querySelector(".card-content-descripcion").textContent =
    params.description;
  template.content.querySelector(".card-content-link").href = params.url;
  const clone = document.importNode(template.content, true);
  base.appendChild(clone);
}

function getWorks() {
  return fetch(
    "https://cdn.contentful.com/spaces/tnwsiw4enbu0/environments/master/entries?access_token=wmRajosAg7jNAmkMJVtCoVoTdIS7OZe0R6TK5U6x6L0&content_type=work"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      /*console.log(data);*/
      const back = data.includes.Asset[1].fields.file.url;
      const datos = data.items.map((e) => {
        return {
          title: e.fields.titulo,
          img: back,
          description: e.fields.descripcion,
          url: e.fields.url,
        };
      });
      return datos;
    });
}
function main() {
  getWorks().then(function (works) {
    for (const w of works) {
      console.log(w.title);
      addCard(w);
    }
  });
}

main();
