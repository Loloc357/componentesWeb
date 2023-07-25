function cabecera(ptrs = [{}]) {
  const elH = document.createElement("div");
  elH.innerHTML = `<template id="header-temp">
      <img src="" class="header--img" />
      <div class="header--menu--hamb">

        <button class="header--menu--hamb--boton">
          <img class="h-m-h-b-i" src="">
        </button>
        <div class="header--menu--ventana">
          <button class="header--menu--ventana--boton">
          <img class="h-m-v-b-c" src="">
          </button>
          <div class="header--menu--ventana--content">
            <ul class="h-m-v-c-ul">
            <li class="h-m-v-c-li"><a class="link-li po"href="./portfolio.html"></a></li>
            <li  class="h-m-v-c-li"><a class="link-li b"href="./contacto.html"></a></li>
            <li  class="h-m-v-c-li"><a class="link-li c"href="./servicios.html"></a></li>
          </ul>
          </div>
        </div>
      </div>
    </template>`;
  const contElH = document.querySelector(".header");
  const t = elH.querySelector("#header-temp");
  t.content.querySelector(".header--img").src = ptrs.logo;
  t.content.querySelector(".h-m-h-b-i").src = ptrs.menu;
  t.content.querySelector(".h-m-v-b-c").src = ptrs.close;
  t.content.querySelector(".po").textContent = ptrs.portafolio;
  t.content.querySelector(".b").textContent = ptrs.contacto;
  t.content.querySelector(".c").textContent = ptrs.servicio;
  const clone = document.importNode(t.content, true);
  contElH.appendChild(clone);
}

function datosCabecera() {
  return fetch(
    "https://cdn.contentful.com/spaces/tnwsiw4enbu0/environments/master/entries?access_token=wmRajosAg7jNAmkMJVtCoVoTdIS7OZe0R6TK5U6x6L0&content_type=bienvenida"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return {
        logo: data.includes.Asset[4].fields.file.url,
        menu: data.includes.Asset[7].fields.file.url,
        close: data.includes.Asset[1].fields.file.url,
        portafolio: data.items[0].fields.portafolio,
        contacto: data.items[0].fields.contacto,
        servicio: data.items[0].fields.servicios,
      };
    });
}
function abrirVentana() {
  const evento = document.querySelector(".header--menu--hamb--boton");
  const ventana = document.querySelector(".header--menu--ventana");
  const cdVentana = document.querySelector(".header--menu--ventana--boton");
  evento.addEventListener("click", () => {
    ventana.style.display = "inherit";
  });
  cdVentana.addEventListener("click", () => {
    ventana.style.display = "none";
  });
}
function main() {
  datosCabecera().then((e) => {
    cabecera(e);
    abrirVentana();
  });
}
main();
