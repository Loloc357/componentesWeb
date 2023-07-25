function bienvenida(params = [{}]) {
  const elB = document.createElement("div");
  elB.innerHTML = `
  <template id="bienvenida-temp">
  <div class="bienvenida--content">
  <div class="b-c-s">
    <p class="bienvenida--saludo">Hola</p>
    <p class="bienvenida--saludo2">soy David</p>
  </div>
        <img
          class="bienvenida--imagen"
          src="https://picsum.photos/295/240"
          alt=""
        />
        </div>
        </template>
  `;
  const contElB = document.querySelector(".bienvenida");
  const template = elB.querySelector("#bienvenida-temp");
  template.content.querySelector(".bienvenida--saludo").textContent =
    params.saludo;
  template.content.querySelector(".bienvenida--saludo2").textContent =
    params.saludo2;
  template.content.querySelector(".bienvenida--imagen").src = params.img;
  const clone = document.importNode(template.content, true);
  contElB.appendChild(clone);
}
function getBienv() {
  return fetch(
    "https://cdn.contentful.com/spaces/tnwsiw4enbu0/environments/master/entries?access_token=wmRajosAg7jNAmkMJVtCoVoTdIS7OZe0R6TK5U6x6L0&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        saludo: data.items[0].fields.saludo1,
        saludo2: data.items[0].fields.saludo2,
        img: data.includes.Asset[6].fields.file.url,
      };
    });
}
function main() {
  getBienv().then((e) => {
    bienvenida(e);
  });
}
main();
