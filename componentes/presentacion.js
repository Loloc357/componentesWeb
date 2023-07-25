function presentacion(ptrs = [{}]) {
  const pContent = document.createElement("div");
  pContent.innerHTML = `
  <template id="presentacion--temp">
  <div class="p-c-c">
     <h2 class="presentacion--titulo"></h2>
        <p class="presentacion--texto">
        </p>
        </div >
        <img
          class="presentacion--imagen"
          src=""/>
        </template>
    `;
  const pContainer = document.querySelector(".presentacion");
  const t = pContent.querySelector("#presentacion--temp");
  t.content.querySelector(".presentacion--titulo").textContent = ptrs.titulo;
  t.content.querySelector(".presentacion--texto").textContent = ptrs.texto;
  t.content.querySelector(".presentacion--imagen").src = ptrs.imagen;
  const clone = document.importNode(t.content, true);
  pContainer.appendChild(clone);
}
function pContenido() {
  return fetch(
    "https://cdn.contentful.com/spaces/tnwsiw4enbu0/environments/master/entries?access_token=wmRajosAg7jNAmkMJVtCoVoTdIS7OZe0R6TK5U6x6L0&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        titulo: data.items[0].fields.tP,
        texto: data.items[0].fields.textoPresentacion,
        imagen: data.includes.Asset[8].fields.file.url,
      };
    });
}

function main() {
  pContenido().then((e) => {
    presentacion(e);
  });
}
main();
